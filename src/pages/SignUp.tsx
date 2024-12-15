import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../components/addDoctor/formSchemas";
import { useForm } from "react-hook-form";
import {
  sanitizeToLetters,
  sanitizeToEmail
} from "@/utils/helperFunctions";
import { ChangeEvent, useState } from "react";
import Spinner from "@/components/Spinner";
import useAuth from '../authentication/useAuth'
import SuccessDialog from "@/components/alertDialog/successDialog";
import ErrorDialog from "@/components/alertDialog/errorDialog";

export default function SignUp() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccessDialogOpen, setSuccessDialogOpen] = useState(false);
  const [isErrorDialogOpen, setErrorDialogOpen] = useState(false);
  const { register, handleSubmit,setValue,trigger,reset, formState: { errors } } = useForm({
    mode: "all",
    reValidateMode: "onSubmit",
    resolver: yupResolver(signUpSchema)
  });
  const [loading, setLoading] = useState(false);
//   const onSubmit = async (data) => {
//     setLoading(true);
//     setErrorMessage('');
//     console.log('Form Data:', data);
//     try {
//       if (data) {
//         await auth.signUp(data);

//         setSuccessDialogOpen(true);
//         setLoading(false)
//         reset();
//         return;
//       }
        
//     } catch (error) {
//         console.error('Error during form submission:', error);
//         setErrorDialogOpen(true);
//         if (error.message.includes('NetworkError')) {
//           setErrorMessage('Network issue. Please try again.');
//         } else {
//           setErrorMessage('An error occurred. Please try again.');
//         }
      
      
//     }
// };
// async function fetchData(data) {
  
//   const apiUrl = import.meta.env.VITE_API_URL;

//   try {
//       // Use the form data in the request body
//       const response = await fetch(`${apiUrl}/api/v1/accounts/Create`, {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(data)
//       });

//       // Check if the response was successful
//       if (!response.ok) {
//           const errorText = await response.text(); // Get error details from the response
//           throw new Error(`Network response was not ok. Status: ${response.status}. ${errorText}`);
//       }

//       // Parse the JSON from the response
//       const responseData = await response.json();

//       // Log the response data
//       console.log('API Response:', responseData);
//        // Show success modal
//        document.getElementById('success-modal').checkVisibility()
//        navigate('/login')

//   } catch (error) {
//       // Log any errors that occurred during the fetch operation
//       console.error('Fetch error:', error);
//       document.getElementById('error-modal').checkVisibility()
//   }finally {
//     setLoading(false);
//   }
// }
 
const onSubmit = async (data) => {
  console.log('Form Data:', data);
  setLoading(true);

  setErrorMessage('');

 

  // // Set a timeout to handle the network issue message
  // const timeoutId = setTimeout(() => {
  //   if (loading) { // Only show the error message if we're still loading
  //     setErrorMessage('Network issue. Please try again.');
  //     setErrorDialogOpen(true);
  //   }
  // }, 120000); // 120,000 milliseconds = 2 minutes

  try {
    if (data) {
      await auth.signUp(data);
      // clearTimeout(timeoutId); // Clear timeout on successful sign-up
      setSuccessDialogOpen(true);
      reset(); // Reset form fields after successful sign-up
    }
  } catch (error) {
    console.error('Error during form submission:', error);
    setErrorMessage(
      error.message.includes('Error') 
        ? 'Network issue. Please try again.' 
        : 'An error occurred. Please try again.'
    );
    setErrorDialogOpen(true);
  } finally {
    setLoading(false); // Ensure loading state is turned off
  }
};
  
  return (
      <>
        <h2 className="text-xl font-medium mb-3 mt-8">Create an account</h2>
        <form className="w-3/4" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full space-y-6">
           
            <div className="grid space-y-3">
              <Label name="firstName" label="First Name" className="text-xs text-red-600" required={true} />
              <Input id="firstName" name="FirstName" type="text" className="w-full bg-none border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  onChange={(e:ChangeEvent<HTMLInputElement>) => {
                    setValue("firstName", sanitizeToLetters(e.target.value));
                    trigger("firstName")}}
               {...register('firstName')} />
               {/* ERROR MESSAGE */}
               {errors.firstName && (
                  <p className="text-red-500 text-xs">
                    {errors.firstName.message}
                  </p>
                )}
            </div>
            <div className="grid space-y-3">
              <Label name="lastName" label="Last Name" className="text-xs text-red-600" required={true} />
              <Input id="lastName" name="lastName" type="text" className="w-full bg-none border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  onChange={(e:ChangeEvent<HTMLInputElement>) => {
                    setValue("lastName", sanitizeToLetters(e.target.value));
                    trigger("lastName")}}
               {...register('lastName')} />
               {/* ERROR MESSAGE */}
               {errors.lastName && (
                  <p className="text-red-500 text-xs">
                    {errors.lastName.message}
                  </p>
                )}
            </div>
            <div className="grid space-y-3">
              <Label name="username" label="Username" className="text-xs text-red-600" required={true} />
              <Input id="username" name="username" type="text" className="w-full bg-none border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  onChange={(e:ChangeEvent<HTMLInputElement>) => {
                    setValue("username", sanitizeToLetters(e.target.value));
                    trigger("username")}}
               {...register('username')} />
               {/* ERROR MESSAGE */}
               {errors.username && (
                  <p className="text-red-500 text-xs">
                    {errors.username.message}
                  </p>
                )}
            </div>
            <div className="grid space-y-3">
              <Label name="email" label="Email" className="text-xs text-red-600" required={true} />
              <Input id="email" name="email" type="email" className="w-full bg-none border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  onChange={(e:ChangeEvent<HTMLInputElement>) => {
                    setValue("email", sanitizeToEmail(e.target.value));
                    trigger("email")}}
               {...register('email')} />
              {/* ERROR MESSAGE */}
              {errors.email && (
                  <p className="text-red-500 text-xs">
                    {errors.email.message}
                  </p>
                )}
            </div>
            <div className="grid space-y-3">
              <Label name="phone" label="Phone Number" className="text-xs text-red-600" required={true} />
              <Input id="phone" name="phone" type="text" className="w-full bg-none border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  onChange={(e:ChangeEvent<HTMLInputElement>) => {
                    setValue("phoneNumber", sanitizeToLetters(e.target.value));
                    trigger("phoneNumber")}}
               {...register('phoneNumber')} />
               {/* ERROR MESSAGE */}
               {errors.phoneNumber && (
                  <p className="text-red-500 text-xs">
                    {errors.phoneNumber.message}
                  </p>
                )}
            </div>
          
            <div className="grid space-y-3">
              <Label name="password" label="Password" className="text-xs text-red-600" required={true} />
              <Input id="password" name="password" type="password" className="w-full bg-none border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  onChange={(e:ChangeEvent<HTMLInputElement>) => {
                    setValue("password", sanitizeToLetters(e.target.value));
                    trigger("password")}}
               {...register('password')} />
               {/* ERROR MESSAGE */}
               {errors.password && (
                  <p className="text-red-500 text-xs">
                    {errors.password.message}
                  </p>
                )}
            </div>
         
        
            <Button type="submit" styles="bg-primaryBlue text-white">
              Register
            </Button>
            <div>
              <div className="flex justify-center items-center space-x-1 mt-3">
                <p className="text-sm">Already have an account?</p>
                <Link to="/auth/login" className="text-sm">
                  <span className="text-primaryBlue font-medium">Login</span>
                </Link>
              </div>
            </div>
          </div>
        </form>
        {loading && <Spinner/>}
        {/* Dialogs */}
        <SuccessDialog open={isSuccessDialogOpen} onClose={() => setSuccessDialogOpen(false)} />
      <ErrorDialog open={isErrorDialogOpen} onClose={() => setErrorDialogOpen(false)} errorMessage={errorMessage} />
        
      
      </>
        
      
              );

      
  
}
