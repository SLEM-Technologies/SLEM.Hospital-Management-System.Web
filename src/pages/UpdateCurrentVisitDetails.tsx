import {  useNavigate, useParams } from "react-router-dom";
import { Patients } from "../data/constant";
import Button from "@/components/Button";
// import Input from "@/components/Input";
import Label from "../components/Label";
import { useForm,Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editCurrentVisitDetails } from "@/schemas/editFormSchema";
import React, {  useEffect } from "react";



export default function UpdateCurrentVisitDetails() {
  const navigate = useNavigate();
  
    const { id } = useParams();
    const selectedID = Number(id);
    const currentVisitDetails = Patients; 
  
    const { control, handleSubmit, reset, formState: { errors } } = useForm({
      resolver: yupResolver(editCurrentVisitDetails),
      mode: "all"
    });
  
    useEffect(() => {
      if (selectedID !== null) {
        const selectedItem = currentVisitDetails[selectedID];
        if (selectedItem) {
          reset({
            reasonForVisit: selectedItem.reasonForVisit,
            symptoms: selectedItem.symptoms.join(', '),
            vitalSigns: selectedItem.vitalSigns.join(', '),
            diagnosis: selectedItem.diagnosis,
            treatmentPlan: selectedItem.treatmentPlan
          });
        }
      }
    }, [selectedID, currentVisitDetails, reset]);
  
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
        {currentVisitDetails.map((item, index) => {
          return selectedID === index ? (
            <div className="w-full" key={index}>
              <h1 className=" leading-tight tracking-wide text-lg md:text-xl font-semibold text-center">Update Current Visit Details</h1>
              <form className="flex flex-col justify-center items-center w-full mt-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full md:w-[55%] border-2 border-black-100 rounded-md">
                  <div className="px-4 mt-4">
                    <Label name="reasonForVisit" label="Reason for Visit:" required={true} className="text-xs text-red-600 font-bold" />
                    <Controller
                      name="reasonForVisit"
                      control={control}
                      render={({ field }) => (
                        <input
                          id="reasonForVisit"
                          type="text"
                          className="w-full border border-gray-200 p-2 focus-hidden:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded"
                          {...field}
                        />
                      )}
                    />
                    {errors.reasonForVisit && <p className="text-red-500 text-xs">{errors.reasonForVisit.message}</p>}
                  </div>
                  <div className="px-4 mt-4">
                    <Label name="symptoms" label="Symptoms:" required={true} className="text-xs text-red-600 font-bold" />
                    <Controller
                      name="symptoms"
                      control={control}
                      render={({ field }) => (
                        <input
                          id="symptoms"
                          type="text"
                          className="w-full border border-gray-200 p-2 focus-hidden:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded"
                          {...field}
                        />
                      )}
                    />
                    {errors.symptoms && <p className="text-red-500 text-xs">{errors.symptoms.message}</p>}
                  </div>
                  <div className="px-4 mt-4">
                    <Label name="vitalSigns" label="Vital Signs:" required={true} className="text-xs text-red-600 font-bold" />
                    <Controller
                      name="vitalSigns"
                      control={control}
                      render={({ field }) => (
                        <input
                          id="vitalSigns"
                          type="text"
                          className="w-full border border-gray-200 p-2 focus-hidden:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded"
                          {...field}
                        />
                      )}
                    />
                    {errors.vitalSigns && <p className="text-red-500 text-xs">{errors.vitalSigns.message}</p>}
                  </div>
                  <div className="px-4 mt-4">
                    <Label name="diagnosis" label="Diagnosis:" required={true} className="text-xs text-red-600 font-bold" />
                    <Controller
                      name="diagnosis"
                      control={control}
                      render={({ field }) => (
                        <input
                          id="diagnosis"
                          type="text"
                          className="w-full border border-gray-200 p-2 focus-hidden:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded"
                          {...field}
                        />
                      )}
                    />
                    {errors.diagnosis && <p className="text-red-500 text-xs">{errors.diagnosis.message}</p>}
                  </div>
                  <div className="px-4 mt-4">
                    <Label name="treatmentPlan" label="Treatment Plan:" required={true} className="text-xs text-red-600 font-bold" />
                    <Controller
                      name="treatmentPlan"
                      control={control}
                      render={({ field }) => (
                        <input
                          id="treatmentPlan"
                          type="text"
                          className="w-full border border-gray-200 p-2 focus-hidden:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded mb-6"
                          {...field}
                        />
                      )}
                    />
                    {errors.treatmentPlan && <p className="text-red-500 text-xs">{errors.treatmentPlan.message}</p>}
                  </div>
                </div>
            <div className="mt-6 w-full text-center">
               <Button
                type="submit"
                styles="w-full md:w-auto  bg-primaryBlue text-white hover:bg-primaryBlue/90 p-2 mb-4 md:mr-6"
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