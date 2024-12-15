
import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Patients } from "../data/constant";
import { FaRegSquarePlus } from "react-icons/fa6";

export default function NotesObservations() {
  const [step, setStep] = useState(1);
  const { id } = useParams();
  const selectedID = Number(id);
  const notesObservationsDetails = Patients;
  const [activeItem, setActiveItem] = useState<'doctor' | 'nurse'>('doctor');
  const [inputValue, setInputValue] = useState('');
  const currentDoctorNote = useRef([]);
  const currentNurseNote = useRef([]);
  const [error, setError] = useState(''); // State to hold the error message

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value.trim() !== '') {
      setError(''); // Clear the error message when the user starts typing
    }
  };

  const handleAddNewDoctorNote = () => {
    if (inputValue.trim() === '') return error;
    
    const newDoctorNote = {
      newNote: inputValue,
      date: new Date().toLocaleDateString(),
    };
    
    currentDoctorNote.current = [newDoctorNote,...currentDoctorNote.current];
    setInputValue('');
  };

  const handleAddNewNurseNote = () => {
    if (inputValue.trim() === '') return error;

    const newNurseNote = {
      newNote: inputValue,
      date: new Date().toLocaleDateString(),
    };

    currentNurseNote.current = [newNurseNote,...currentNurseNote.current];
    setInputValue('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      setError('Please insert a value'); // Set the error message
      return;}
    if (activeItem === 'doctor') {
      handleAddNewDoctorNote();
    } else {
      handleAddNewNurseNote();
    }
  };

  const handleDoctorClick = () => {
    if (step > 1) {
      setStep(s => s - 1);
    }
    setActiveItem('doctor');
  };

  const handleNurseClick = () => {
    if (step < 2) {
      setStep(s => s + 1);
    }
    setActiveItem('nurse');
  };

  return (
    <div>
      {notesObservationsDetails.map((item, index) => {
        if (selectedID !== index) return null;
        return (
          <div className="w-full relative min-h-screen flex flex-col" key={index}>
            <h1 className='font-bold text-center leading-tight tracking-wide text-lg md:text-xl mb-6'>Notes & Observations</h1>
            <div className="w-full md:w-[50%] flex flex-col md:flex-row items-start md:items-center md:mx-auto">
              <div className="flex flex-col items-center w-full md:w-[50%]">
                <p
                  className={`cursor-pointer px-4 font-bold text-xl ${activeItem === 'doctor' ? 'text-primaryBlue' : 'text-gray-500 '}`}
                  onClick={handleDoctorClick}
                >
                  Doctor
                </p>
                <div className={`${activeItem === 'doctor' ? 'h-3 border-b-2 w-full border-primaryBlue' : 'border-b w-full h-3 border-gray-500'}`}></div>
              </div>
              <div className="flex flex-col items-center w-full md:w-[50%]">
                <p
                  className={`cursor-pointer px-4 font-bold text-xl ${activeItem === 'nurse' ? 'text-primaryBlue' : 'text-gray-500 '}`}
                  onClick={handleNurseClick}
                >
                  Nurse
                </p>
                <div className={`${activeItem === 'nurse' ? 'h-3 border-b-2 w-full border-primaryBlue' : ' border-b w-full border-gray-500 h-3'}`}></div>
              </div>
            </div>
             
            <div className="w-full md:w-[50%] mx-auto flex flex-col flex-wrap">
              {activeItem === 'doctor' && <AddNewDoctorNote currentDoctorNote={currentDoctorNote} />}
              {activeItem === 'nurse' && <AddNewNurseNote currentNurseNote={currentNurseNote} />}
              {activeItem === 'doctor' && <DoctorNote item={item} />}
              {activeItem === 'nurse' && <NurseNote item={item} />}
            </div>
              
            <div className="absolute bottom-0 md:bottom-0 w-full flex flex-col justify-center items-center mb-6">
              <hr className='h-[2px] my-2 w-full px-0'/>
              
              <div className='flex w-full items-center justify-center space-x-6 mt-6'>
                <input
                  type="text"
                  className="w-full md:w-[50%] border border-gray-200 p-3 focus-visible:outline-primaryBlue text-gray-500 bg-white rounded h-14"
                  placeholder={`Add a new ${activeItem === 'doctor' ? 'doctor' : 'nurse'} note...`}
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <span className="mr-2">
                  <FaRegSquarePlus size={55} className='text-primaryBlue cursor-pointer' onClick={handleSubmit} />
                </span>
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function DoctorNote({ item }) {
  return (
    <div className='flex flex-col border bg-white rounded-md p-4 mt-4'>
      <h2 className='font-bold leading-tight tracking-wide text-xl mb-2'>
        {item.doctorNote}
      </h2>
      <p className='text-gray-400'>{item.noteDate}</p>
    </div>
  );
}

function NurseNote({ item }) {
  return (
    <div className='flex flex-col border bg-white rounded-md p-4 mt-4'>
      <h2 className='font-bold leading-tight tracking-wide text-xl mb-2'>
        {item.nurseNote}
      </h2>
      <p className='text-gray-400'>{item.noteDate}</p>
    </div>
  );
}

function AddNewDoctorNote({ currentDoctorNote }) {
  return (
    <div>
      {currentDoctorNote.current.map((item, index) => (
        <div className='flex flex-col border bg-white rounded-md p-4 mt-4' key={index}>
          <h2 className='font-bold leading-tight tracking-wide text-xl mb-2'>
            {item.newNote}
          </h2>
          <p className='text-gray-400'>{item.date}</p>
        </div>
      ))}
    </div>
  );
}

function AddNewNurseNote({ currentNurseNote }) {
  return (
    <div>
      {currentNurseNote.current.map((item, index) => (
        <div className='flex flex-col border bg-white rounded-md p-4 mt-4' key={index}>
          <h2 className='font-bold leading-tight tracking-wide text-xl mb-2'>
            {item.newNote}
          </h2>
          <p className='text-gray-400'>{item.date}</p>
        </div>
      ))}
    </div>
  );
}