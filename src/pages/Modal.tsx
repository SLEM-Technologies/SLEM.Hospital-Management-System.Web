// // import Button from "@/components/Button";
// // // import Input from "@/components/Input";
// // import Label from "../components/Label";
// import { useForm,Controller } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { addNewPrescription } from "../components/addDoctor/formSchemas";

// // export default function Modal({isOpen,onClose}
// // ){
// //     const { control, handleSubmit, formState: { errors } } = useForm({
// //         resolver: yupResolver(addNewPrescription),
// //         mode: "all"
// //       });
// //       const onSubmit = data => {
// //         console.log("Form is about to be submitted");
// //         console.log(data);
// //         // Handle form submission logic here
// //       };
// //     if (!isOpen) return null;
    
// //     return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col">
       
// //         <form className="flex flex-col justify-center items-center w-[35%] mt-6 border-2 shadow rounded-md bg-white" onSubmit={handleSubmit(onSubmit)}>
    
// //     <div className="w-full">
// //     <h1 className=" leading-tight tracking-wide text-lg md:text-xl font-semibold text-center my-4">Add New Prescription</h1>
// //       <div className="px-4 mt-4">
// //         <Controller
// //           name="medication"
// //           control={control}
// //           render={({ field }) => (
// //             <input
// //               id="medication"
// //               type="text"
// //               className="w-full border border-gray-200 p-2 focus-visible:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded"
// //               placeholder="Medication"
// //               {...field}
// //             />
// //           )}
// //         />
// //         {errors.medication && <p className="text-red-500 text-xs">{errors.medication.message}</p>}
// //       </div>
// //       <div className="px-4 mt-4">

// //         <Controller
// //           name="dosage"
// //           control={control}
// //           render={({ field }) => (
// //             <input
// //               id="dosage"
// //               type="text"
// //               className="w-full border border-gray-200 p-2 focus-visible:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded"
// //               placeholder="Dosage"
// //               {...field}
// //             />
// //           )}
// //         />
// //         {errors.dosage && <p className="text-red-500 text-xs">{errors.dosage.message}</p>}
// //       </div>
// //       <div className="px-4 mt-4">
    
// //         <Controller
// //           name="frequency"
// //           control={control}
// //           render={({ field }) => (
// //             <input
// //               id="frequency"
// //               type="text"
// //               className="w-full border border-gray-200 p-2 focus-visible:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded"
// //               placeholder="Frequency"
// //               {...field}
// //             />
// //           )}
// //         />
// //         {errors.frequency && <p className="text-red-500 text-xs">{errors.frequency.message}</p>}
// //       </div>
     
// //     </div>
// // <div className="mt-6 w-full text-center">
// //    <Button
// //     type="submit"
// //     styles="w-full md:w-auto  bg-primaryBlue text-white hover:bg-primaryBlue/90 p-2 mb-4 md:mr-6"
// //     onClick={onClose}
// //   >
// //     Add Prescription
// //   </Button>
// //   <Button
// // type="submit"
// // styles="w-full md:w-auto mt-4 text-center border text-gray-700 py-2 px-3 rounded-md hover:bg-gray-200"
// // onClick={onClose}
// // >
// // Cancel
// // </Button>



// // </div>
// // </form>


// //     </div>
// // }
// import React from 'react';


// const Modal = ({isOpen,onClose}) => {
//         const { control, handleSubmit, formState: { errors } } = useForm({
//         resolver: yupResolver(addNewPrescription),
//         mode: "all"
//       });
//       const onSubmit = data => {
//         console.log("Form is about to be submitted");
//         console.log(data);
//         // Handle form submission logic here
//       };
//     if (!isOpen) return null;
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="modal modal-open">
//         <div className="modal-box w-11/12 max-w-2xl">
//           <h1 className="leading-tight tracking-wide text-lg md:text-xl font-semibold text-center my-4">
//             Add New Prescription
//           </h1>
//           <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit(onSubmit)}>
//             <div className="w-full">
//               <div className="px-4 mt-4">
//                 <Controller
//                   name="medication"
//                   control={control}
//                   render={({ field }) => (
//                     <input
//                       id="medication"
//                       type="text"
//                       className="w-full border border-gray-200 p-2 focus-visible:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded"
//                       placeholder="Medication"
//                       {...field}
//                     />
//                   )}
//                 />
//                 {errors.medication && (
//                   <p className="text-red-500 text-xs">{errors.medication.message}</p>
//                 )}
//               </div>

//               <div className="px-4 mt-4">
//                 <Controller
//                   name="dosage"
//                   control={control}
//                   render={({ field }) => (
//                     <input
//                       id="dosage"
//                       type="text"
//                       className="w-full border border-gray-200 p-2 focus-visible:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded"
//                       placeholder="Dosage"
//                       {...field}
//                     />
//                   )}
//                 />
//                 {errors.dosage && (
//                   <p className="text-red-500 text-xs">{errors.dosage.message}</p>
//                 )}
//               </div>

//               <div className="px-4 mt-4">
//                 <Controller
//                   name="frequency"
//                   control={control}
//                   render={({ field }) => (
//                     <input
//                       id="frequency"
//                       type="text"
//                       className="w-full border border-gray-200 p-2 focus-visible:outline-primaryBlue even:bg-gray-200 odd:bg-white mt-2 rounded"
//                       placeholder="Frequency"
//                       {...field}
//                     />
//                   )}
//                 />
//                 {errors.frequency && (
//                   <p className="text-red-500 text-xs">{errors.frequency.message}</p>
//                 )}
//               </div>
//             </div>

//             <div className="mt-6 w-full text-center">
//               <button
//                 type="submit"
//                 className="btn w-full md:w-auto bg-primaryBlue text-white hover:bg-primaryBlue/90 p-2 mb-4 md:mr-6"
//                 onClick={onClose}
//               >
//                 Add Prescription
//               </button>
//               <button
//                 type="button"
//                 className="btn w-full md:w-auto mt-4 text-center border text-gray-700 py-2 px-3 rounded-md hover:bg-gray-200"
//                 onClick={onClose}
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
import React from 'react';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, isOpen,  children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="modal modal-open">
        <div className="modal-box w-11/12 ">
          <div className="flex justify-center items-center mb-4">
           <h1 className=" leading-tight tracking-wide text-lg md:text-xl font-semibold text-center my-4">{title}</h1>
          </div>
          <div>
            {children}
          </div>
                 
          </div>
        </div>
      </div>
   
  );
};

export  {Modal};
