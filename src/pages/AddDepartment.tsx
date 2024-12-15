import Button from "@/components/Button";
import Label from "@/components/Label";
import { DepartmentsData } from "@/data/constant";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { departmentFormSchema } from "../components/addDoctor/formSchemas";
// import {
//   sanitizeToLetters,
// } from "@/utils/helperFunctions";
// import { ChangeEvent } from "react";


export default function AddDepartment() {
  const options = DepartmentsData
  const { register, handleSubmit,reset, formState: { errors } } = useForm({mode: "all",
    reValidateMode: "onSubmit",
    resolver: yupResolver(departmentFormSchema)
  });
  const onSubmit = data => {
    console.log(data);
    reset()
  };
  

    return (
      <div className="max-w-2xl mx-auto mt-4 md:mt-24">
        <h2 className="text-lg font-semibold">Add Department</h2>
        <form className="grid mt-8" onSubmit={handleSubmit(onSubmit)}>
          
          {/* BASIC FORM */}
          <div>
            <p className="w-full text-sm font-medium text-white bg-primaryBlue p-3">
              Department Information
            </p>

            {/* DEPARTMENT NAME & DOCTOR NAME */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
              <div className="space-y-2">
                <Label name="departmentName" label="Department Name" className="text-xs text-red-600" required={true} />
                <input
                  id="departmentName"
                  type="text"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  {...register('departmentName')}
                />
                 {/* ERROR MESSAGE */}
                 {errors.departmentName && (
                  <p className="text-red-500 text-xs">
                    {errors.departmentName.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label name="doctor" label="Doctor" className="text-xs text-red-600" required={true} />
                <select
                  id="doctor"
                  className="w-full border border-gray-300 p-2  focus-visible:outline-primaryBlue"
                  {...register('doctor')}
                >
                   {options.map((option,index)=>{
                    return <option key={index} value={index}>{option.headDepartment}</option>
                  })} 
                  </select>
                 {/* ERROR MESSAGE */}
                 {errors.doctor && (
                  <p className="text-red-500 text-xs">
                    {errors.doctor.message}
                  </p>
                )}
              </div>
            </div>

            {/* HEAD OF DEPARTMENT NAME & STATUS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4 mb-8">
            <div className="space-y-2">
                <Label name="headDepartment" label="Head Department" className="text-xs text-red-600" required={true} />
                <select
                  id="headDepartment"
                  className="w-full border border-gray-300 p-2  focus-visible:outline-primaryBlue"
                  {...register('headDepartment')}
                >
                   {options.map((option,index)=>{
                    return <option key={index} value={index}>{option.headDepartment}</option>
                  })} 
                  </select>
                   {/* ERROR MESSAGE */}
                 {errors.headDepartment && (
                  <p className="text-red-500 text-xs">
                    {errors.headDepartment.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label name="status" label="Status" className="text-xs text-red-600" required={true} />
                <select
                  id="status"
                  className="w-full border border-gray-300 p-2  focus-visible:outline-primaryBlue"
                  {...register('status')}
                >
                  <option value='active'>Active</option>
                  <option value='inactive'>Inactive</option>
                </select>
                 {/* ERROR MESSAGE */}
                 {errors.status && (
                  <p className="text-red-500 text-xs">
                    {errors.status.message}
                  </p>
                )}
              </div>
             
            </div>

           
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
}
