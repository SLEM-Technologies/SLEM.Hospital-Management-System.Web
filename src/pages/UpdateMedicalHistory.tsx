import {  useNavigate, useParams } from "react-router-dom";
import { Patients } from "../data/constant";
import Button from "@/components/Button";
// import Input from "@/components/Input";
import Label from "../components/Label";
import { useForm,Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editMedicalHistory } from "@/schemas/editFormSchema";
import React, {  useEffect } from "react";



export default function UpdateMedicalHistory() {
  const navigate = useNavigate();
    const { id } = useParams();
    const selectedID = Number(id);
    const medicalHistoryPatient = Patients; 
  
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
      resolver: yupResolver(editMedicalHistory),
      mode: "all"
    });
    
  
    useEffect(() => {
      if (selectedID !== null) {
        const selectedItem = medicalHistoryPatient[selectedID];
        if (selectedItem) {
          reset({
            allergies: selectedItem.allegies.join(', '),
            chronicConditions: selectedItem.chronicConditions.join(', '),
            previousSurgeries: selectedItem.previousSurgeries,
            currentMedications: selectedItem.currentMedications,
            familyMedicalHistory: selectedItem.familyMedicalHistory
          });
        }
      }
    }, [selectedID, medicalHistoryPatient, reset]);
  
    const onSubmit = data => {
      console.log("Form is about to be submitted");
      console.log(data);
      handleCancelClick()
      // Handle form submission logic here
    };
    const handleCancelClick = () =>{
      navigate(`/account/patients/patient-profile/${selectedID}`);
    }
    return (
      <div>
        {medicalHistoryPatient.map((item, index) => {
          return selectedID === index ? (
            <div className="w-full" key={index}>
              <h1 className="leading-tight tracking-wide text-lg md:text-xl font-semibold text-center">Update Medical History</h1>
              <form className="flex flex-col justify-center items-center w-full mt-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full md:w-[55%] border-2 border-black-100 rounded-md">
                  <div className="px-4 mt-4">
                    <Label name="allergies" label="Allergies:" required={true} className="text-xs text-red-600 font-bold" />
                    <Controller
                      name="allergies"
                      control={control}
                      render={({ field }) => (
                        <input
                          id="allergies"
                          type="text"
                          className="w-full border border-gray-200 p-2 focus-hidden:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded"
                          {...field}
                        />
                      )}
                    />
                    {errors.allergies && <p className="text-red-500 text-xs">{errors.allergies.message}</p>}
                  </div>
                  <div className="px-4 mt-4">
                    <Label name="chronicConditions" label="Chronic Conditions:" required={true} className="text-xs text-red-600 font-bold" />
                    <Controller
                      name="chronicConditions"
                      control={control}
                      render={({ field }) => (
                        <input
                          id="chronicConditions"
                          type="text"
                          className="w-full border border-gray-200 p-2 focus-hidden:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded"
                          {...field}
                        />
                      )}
                    />
                    {errors.chronicConditions && <p className="text-red-500 text-xs">{errors.chronicConditions.message}</p>}
                  </div>
                  <div className="px-4 mt-4">
                    <Label name="previousSurgeries" label="Previous Surgeries:" required={true} className="text-xs text-red-600 font-bold" />
                    <Controller
                      name="previousSurgeries"
                      control={control}
                      render={({ field }) => (
                        <input
                          id="previousSurgeries"
                          type="text"
                          className="w-full border border-gray-200 p-2 focus-hidden:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded"
                          {...field}
                        />
                      )}
                    />
                    {errors.previousSurgeries && <p className="text-red-500 text-xs">{errors.previousSurgeries.message}</p>}
                  </div>
                  <div className="px-4 mt-4">
                    <Label name="currentMedications" label="Current Medications:" required={true} className="text-xs text-red-600 font-bold" />
                    <Controller
                      name="currentMedications"
                      control={control}
                      render={({ field }) => (
                        <input
                          id="currentMedications"
                          type="text"
                          className="w-full border border-gray-200 p-2 focus-hidden:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded"
                          {...field}
                        />
                      )}
                    />
                    {errors.currentMedications && <p className="text-red-500 text-xs">{errors.currentMedications.message}</p>}
                  </div>
                  <div className="px-4 mt-4">
                    <Label name="familyMedicalHistory" label="Family Medical History:" required={true} className="text-xs text-red-600 font-bold" />
                    <Controller
                      name="familyMedicalHistory"
                      control={control}
                      render={({ field }) => (
                        <input
                          id="familyMedicalHistory"
                          type="text"
                          className="w-full border border-gray-200 p-2 focus-hidden:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded mb-6"
                          {...field}
                        />
                      )}
                    />
                    {errors.familyMedicalHistory && <p className="text-red-500 text-xs">{errors.familyMedicalHistory.message}</p>}
                  </div>
                </div>
            <div className="mt-6 w-full text-center">
               <Button
                type="submit"
                styles="w-full  bg-primaryBlue text-white hover:bg-primaryBlue/90 p-2 mb-4 md:mr-6"
              >
                Save
              </Button>
              <Button
            type="submit"
            styles="w-full md:w-auto mt-4 text-center border text-gray-700 py-2 px-3 rounded-md hover:bg-gray-200"
       
          >
            Cancel
          </Button>
           
           
           
            </div>
          </form>
        </div> 
         ) : null}
    )}
    

    
        
</div>
)}