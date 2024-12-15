import Button from "@/components/Button";
import { useState, ChangeEvent} from "react";
import Input from "@/components/Input";
import Label from "../components/Label";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerPatientSchema } from "../components/addDoctor/formSchemas";

import {
  sanitizeToLetters,
  sanitizeToPhoneNumber,
  sanitizeToEmail
} from "@/utils/helperFunctions";



export default function RegisterPatientPage() {

  const [date, setDate] = useState<Date | null>(null);
  const [chooseDate, setChooseDate] = useState<Date | null>(null);

  const { register, handleSubmit,reset,setValue,trigger, formState: { errors } } = useForm({
    resolver: yupResolver(registerPatientSchema),
    mode: "all",
    reValidateMode: "onSubmit"
  });
 

  const onSubmit = data => {
    console.log("Form is about to be submitted");
    console.log(data);
    reset()
  };

  // useEffect(() => {
  //   console.log(errors);
  // }, [errors]);
  return (
    <div className="w-full md:max-w-2xl md:mx-auto">
      <h2 className="text-lg md:text-xl font-semibold">New Patient</h2>
      <form className="grid mt-8" onSubmit={handleSubmit(onSubmit)}>
        {/* BASIC FORM */}
        <div>
          <p className="w-full text-sm font-medium text-white bg-primaryBlue p-3">
            Basic Information
          </p>
          <div className="bg-white px-4 py-2 md:px-8 md:py-4">
            {/* FIRST & LAST NAME */}
            <div className="grid md:grid-cols-2 md:gap-5">
              <div className="space-y-2">
                <Label name="firstName" label="First Name" required={true} className="text-xs text-red-600" />
                <Input
                 
                  id="firstName"
                  type="text"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  onChange={(e:ChangeEvent<HTMLInputElement>) => {
                    setValue("firstName", sanitizeToLetters(e.target.value));
                    trigger("firstName");
}}

                  {...register("firstName")}
                />

                {errors.firstName && (
                  <p className="text-red-500 text-xs">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="space-y-2 mt-3 md:mt-0">
                <Label name="lastName" label="Last Name" className="text-xs text-red-600" required={true} />
                <Input
                  
                  id="lastName"
                  type="text"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  onChange={(e:ChangeEvent<HTMLInputElement>) => {
                    setValue("lastName", sanitizeToLetters(e.target.value));
                    trigger("lastName");
                  
                  }}
                  {...register("lastName")}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            {/* PHONE & EMAIL */}
            <div className="grid md:grid-cols-2 md:gap-5 md:mt-3">
              <div className="space-y-2 mt-3 md:mt-0">
                <Label name="email" label="Email" className="text-xs text-red-600" required={true} />
                <Input
                  
                  id="email"
                  type="email"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  onChange={(e:ChangeEvent<HTMLInputElement>) => {
                    setValue("email", sanitizeToEmail(e.target.value));
                    trigger("email");
                  
                  }}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-2 mt-3 md:mt-0">
                <Label name="phone" label="Phone No." className="text-xs text-red-600" required={true} />
                <Input
                  
                  id="phone"
                  type="tel"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  onChange={(e:ChangeEvent<HTMLInputElement>) => {
                    setValue("phone", sanitizeToPhoneNumber(e.target.value));
                    trigger("phone");
                 
                  }}
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* GENDER & AGE */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 md:mt-3">
              <div className="space-y-2 mt-3 md:mt-0">
                <Label name="gender" label="Gender" className="text-xs text-red-600" required={true} />
                <select
                  
                  id="gender"
                  className="w-full border border-gray-300 p-2  focus-visible:outline-primaryBlue"
                  {...register("gender")}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errors.gender && (
                  <p className="text-red-500 text-xs">
                    {errors.gender.message}
                  </p>
                )}
              </div>

              {/* AGE */}
              <div className="space-y-2 mt-3 md:mt-0">
                <Label name="age" label="Age" className="text-xs text-red-600" required={true} />
                <Input
                 
                  id="age"
                  type="number"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  onChange={(e:ChangeEvent<HTMLInputElement>) => {
                    setValue("age", sanitizeToPhoneNumber(e.target.value));
                    trigger("age");
                 
                  }}
                  {...register("age")}
                />
                {errors.age && (
                  <p className="text-red-500 text-xs">{errors.age.message}</p>
                )}
              </div>
            </div>

            {/* Date */}
            <div className="grid space-y-2 mt-3">
              <Label name="date" label="Date" className="text-xs text-red-600" required={true} />
              <DatePicker
           

                selected={date}
                className="w-full cursor-pointer border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                onChange={(date: Date | null) => setDate(date)}
              
              />
              
            </div>

            {/* DESCRIPTION */}
            <div className="grid space-y-2 mt-3">
              <Label name="description" label="Description" className="text-xs text-red-600" required={false} />
              <textarea
                className="w-full border border-gray-300 py-2 px-3 focus-visible:outline-primaryBlue"
                id="description"
                rows={5}
                cols={5}
              ></textarea>
            </div>
          </div>
        </div>

        {/* REGISTRATION FORM */}
        <div className="mt-6">
          <p className="w-full text-sm font-medium text-white bg-primaryBlue p-3">
            Registration Information
          </p>

          <div className="bg-white px-4 py-2 md:px-8 md:py-4">
            {/* DOCTOR NAME & STAFF ON DUTY */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2 mt-3 md:mt-0">
                <Label name="doctorName" label="Doctor" className="text-xs text-red-600" required={true} />
                <Input
                  
                  id="doctorName"
                  type="text"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  onChange={(e:ChangeEvent<HTMLInputElement>) => {
                    setValue("doctorName", sanitizeToLetters(e.target.value));
                    trigger("doctorName");
          
                  }}
                  {...register("doctorName")}
                />
                {errors.doctorName && (
                  <p className="text-red-500 text-xs">
                    {errors.doctorName.message}
                  </p>
                )}
              </div>
              <div className="space-y-2 mt-3 md:mt-0">
                <Label
                  name="staffOnDuty"
                  label="Staff On Duty"
                  className="text-xs text-red-600"
                  required={true}
                />
                <Input
                  
                  id="staffOnDuty"
                  type="text"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  onChange={(e:ChangeEvent<HTMLInputElement>) => {
                    setValue("staffOnDuty", sanitizeToLetters(e.target.value));
                    trigger("staffOnDuty");
                    
                  }}
                  {...register("staffOnDuty")}
                />
                {errors.staffOnDuty && (
                  <p className="text-red-500 text-xs">
                    {errors.staffOnDuty.message}
                  </p>
                )}
              </div>
            </div>

            {/* WARD NO. & DATE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-4 mb-6">
              <div className="space-y-2 mt-3 md:mt-0">
                <Label name="wardNo" label=" Ward No." className="text-xs text-red-600" required={true} />
                <Input
                  
                  id="wardNo"
                  type="number"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  onChange={(e:ChangeEvent<HTMLInputElement>) => {
                    setValue("wardNo", sanitizeToPhoneNumber(e.target.value));
                    trigger("wardNo");
             
                  }}
                  {...register("wardNo")}
                />
                {errors.wardNo && (
                  <p className="text-red-500 text-xs">
                    {errors.wardNo.message}
                  </p>
                )}
              </div>
              <div className="grid space-y-2 mt-3 md:mt-0">
                <Label name="chooseDate" label="Choose Date" className="text-xs text-red-600" required={true} />
      
                <DatePicker
                

                  selected={chooseDate}
                  className="w-full cursor-pointer border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  onChange={(newDate: Date | null) => setChooseDate(newDate)}
                />
               
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <Button
            type="submit"
            styles="w-full md:w-auto bg-primaryBlue text-white hover:bg-primaryBlue/90 p-2"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
