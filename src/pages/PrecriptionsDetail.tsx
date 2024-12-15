
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Patients } from "../data/constant";
import { FaCirclePlus } from "react-icons/fa6";
import {Modal} from './Modal';
import { useForm,Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addNewPrescription } from "../components/addDoctor/formSchemas";

export default function PrecriptionDetail() {
  const [step, setStep] = useState(1);
  const { id } = useParams();
  const selectedID = Number(id);
  const presciptionDetails = Patients;
  const [activeItem, setActiveItem] = useState<'current' | 'historical' | null>('current');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(addNewPrescription),
    mode: "all"
  });
  const [historicalPrescriptions, setHistoricalPrescriptions] = useState<any[]>([]);
  const [currentPrescriptions, setCurrentPrescriptions] = useState<any[]>([]);

  const handleMoveToHistory = (index: number) => {
    const prescriptionToMove = currentPrescriptions[index];
    setHistoricalPrescriptions([prescriptionToMove,...historicalPrescriptions]);
    setCurrentPrescriptions(currentPrescriptions.filter((_, i) => i !== index));
  };
  // Function to handle form submission
  const onSubmit = (data) => {
    const newPrescription = {
      medication: data.medication,
      dosage: data.dosage,
      frequency: data.frequency,
      date: new Date().toLocaleDateString(),
    };
    setCurrentPrescriptions([newPrescription,...currentPrescriptions]); // Add new prescription to the array
    setIsModalOpen(false); // Close the modal
    reset(); // Reset the form fields
    setIsFormSubmitted(true);
  };

  const openModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCurrentClick = () => {
    if (step > 1) {
      setStep(s => s - 1);
    }
    setActiveItem('current');
  };

  const handleHistoricalClick = () => {
    if (step < 2) {
      setStep(s => s + 1);
    }
    setActiveItem('historical');
  };
 
  return (
    <div>
      {presciptionDetails.map((item, index) => {
        if (selectedID !== index) return null; // Only render the selected prescription detail

        return (
          <div className="w-full relative min-h-screen flex flex-col" key={index}>
            <h1 className='font-bold text-center leading-tight tracking-wide text-xl mb-6'>Prescriptions</h1>
            <div className="w-full md:w-[50%] flex flex-col md:flex-row  items-start md:items-center md:mx-auto">
              <div className="flex flex-col items-center w-full md:w-[50%]">
                <p
                  className={`cursor-pointer px-4 font-bold text-xl  ${activeItem === 'current' ? 'text-primaryBlue' : 'text-gray-500 '}`}
                  onClick={handleCurrentClick}
                >
                  Current
                </p>
                <div className={`${activeItem === 'current' ? 'h-3 border-b-2 w-full border-primaryBlue' : 'border-b w-full h-3 border-gray-500'}`}></div>
              </div>
              <div className="flex flex-col items-center w-full md:w-[50%]">
                <p
                  className={`cursor-pointer px-4 font-bold text-xl ${activeItem === 'historical' ? 'text-primaryBlue' : 'text-gray-500 '}`}
                  onClick={handleHistoricalClick}
                >
                  Historical
                </p>
                <div className={`${activeItem === 'historical' ? 'h-3 border-b-2 w-full border-primaryBlue' : ' border-b w-full border-gray-500 h-3'}`}></div>
              </div>
            </div>

            <div className="w-full md:w-[25%] mx-auto flex flex-col mt-4 space-y-6">
            {isFormSubmitted && activeItem === 'current' && <AddNewPrescription newPrescription={currentPrescriptions} onMoveToHistory={handleMoveToHistory} onActive={activeItem}/>}
            {isFormSubmitted && activeItem === 'historical' && <AddNewPrescription newPrescription={historicalPrescriptions} onMoveToHistory={handleMoveToHistory} onActive={activeItem}/>}
              {activeItem === 'current' && <CurrentDetail item={item} onActive={activeItem}/>}
              {activeItem === 'historical' && <HistoricalDetail item={item} />}
              {/* Display the list of prescriptions */}
           
         
            </div>

            <div className="absolute bottom-0 md:bottom-0 w-full flex flex-col justify-end items-end mb-6 md:pr-12">
              {activeItem === 'current' && (
                <FaCirclePlus size={55} className='text-primaryBlue cursor-pointer' onClick={openModal} />
              )}

              {/* Modal for adding new prescription */}
              <Modal title="Add New Prescription" isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center">
                  <div className="w-full">
                    <div className="px-4 mt-4">
                      <Controller
                        name="medication"
                        control={control}
                        render={({ field }) => (
                          <input
                            id="medication"
                            type="text"
                            className="w-full border border-gray-200 p-2 focus-visible:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded"
                            placeholder="Medication"
                            {...field}
                          />
                        )}
                      />
                      {errors.medication && (
                        <p className="text-red-500 text-xs">{errors.medication.message}</p>
                      )}
                    </div>

                    <div className="px-4 mt-4">
                      <Controller
                        name="dosage"
                        control={control}
                        render={({ field }) => (
                          <input
                            id="dosage"
                            type="text"
                            className="w-full border border-gray-200 p-2 focus-visible:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded"
                            placeholder="Dosage"
                            {...field}
                          />
                        )}
                      />
                      {errors.dosage && (
                        <p className="text-red-500 text-xs">{errors.dosage.message}</p>
                      )}
                    </div>

                    <div className="px-4 mt-4">
                      <Controller
                        name="frequency"
                        control={control}
                        render={({ field }) => (
                          <input
                            id="frequency"
                            type="text"
                            className="w-full border border-gray-200 p-2 focus-visible:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded"
                            placeholder="Frequency"
                            {...field}
                          />
                        )}
                      />
                      {errors.frequency && (
                        <p className="text-red-500 text-xs">{errors.frequency.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 w-full text-center">
                    <button
                      type="submit"
                      className="btn w-full md:w-auto bg-primaryBlue text-white hover:bg-primaryBlue/90 p-2 mb-4 md:mr-6"
                    >
                      Add New Prescription
                    </button>
                    <button
                      type="button"
                      className="btn w-full md:w-auto mt-4 text-center border text-gray-700 py-2 px-3 rounded-md hover:bg-gray-200"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </Modal>
            </div>
          </div>
        );
      })}
    </div>
  );
}
  
  function CurrentDetail({ item,onActive }: { item: typeof Patients[0],onActive:string }) {
 
    return (
     <>
      <div className='flex flex-col  p-4 border bg-white rounded-md'>
        <h2 className='font-bold text-primaryBlue leading-tight tracking-wide text-xl mb-2'>
          {item.currentPrecription}
        </h2>
        <p className='text-gray-500 font-bold mb-2 leading-tight tracking-wide'>Dosage: {item.currentDosage}</p>
        <p className='text-gray-500  font-bold mb-2 leading-tight tracking-wide'>Frequency: {item.currentFrequency}</p>
        <p className='text-gray-400 leading-tight tracking-wide'>Date: {item.currentPrescriptionDate}</p>
        {onActive === 'current' &&   <div className='mt-12 px-2 border border-gray-300 bg-gray-300 py-2 w-full  cursor-pointer' >Move to Past Prescriptions</div>}
      
      </div>
      
   
      </>
    );
  }
  
  function HistoricalDetail({ item }: { item: typeof Patients[0] }) {
    return (
      <div className='flex flex-col p-4 border bg-white rounded-md'>
        <h2 className='font-bold leading-tight text-primaryBlue tracking-wide text-xl mb-2'>
          {item.precriptionHistory}
        </h2>
        <p className='text-gray-500 font-bold mb-2 leading-tight tracking-wide'>Dosage: {item.prescriptionHistoryDosage}</p>
        <p className='text-gray-500  font-bold mb-2 leading-tight tracking-wide'>Frequency: {item.precriptionHistoryFrequency}</p>
        <p className='text-gray-400 leading-tight tracking-wide'>Date: {item.prescriptionHistoryDate}</p>
      </div>
    );
  }




function AddNewPrescription({ newPrescription,onMoveToHistory,onActive }: { newPrescription: any[],onMoveToHistory?: (index: number) => void,onActive:string}) {
  return (
    <>
    
      {newPrescription.map((i, index) => (
        <div className='flex flex-col p-4 border bg-white rounded-md' key={index}>
        <h2 className='font-bold leading-tight text-primaryBlue tracking-wide text-xl mb-2'>
          {i.medication}
        </h2>
        <p className='text-gray-500 font-bold mb-2 leading-tight tracking-wide'>Dosage: {i.dosage}</p>
        <p className='text-gray-500  font-bold mb-2 leading-tight tracking-wide'>Frequency: {i.frequency}</p>
        <p className='text-gray-400 leading-tight tracking-wide'>Date: {i.date}</p>
        {onActive === 'current' &&   <div className='mt-12 px-2 border border-gray-300 bg-gray-300 py-2 w-full  cursor-pointer' onClick={() => onMoveToHistory(index)}>Move to Past Prescriptions</div>}
     
      </div>
      ))}
    </>
  );
}

