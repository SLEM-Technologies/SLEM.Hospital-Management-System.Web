import React, { ChangeEvent } from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "../components/Label";
import { editProfileSchema } from "@/schemas/editFormSchema";
import { sanitizeToEmail, sanitizeToLetters,sanitizeToPhoneNumber} from "@/utils/helperFunctions";


function EditProfile({onCloseEditProfile}:{onCloseEditProfile:any}) {
  // const [formValues, setFormValues] = useState({
  //   username: "",
  //   location: "",
  //   degree: "",
  //   designation: "",
  //   email: "",
  //   phoneNumber: "",
  //   address: "",
  //   social: "",
  // });

  // const [formErrors, setFormErrors] = useState({
  //   username: "",
  //   location: "",
  //   degree: "",
  //   designation: "",
  //   email: "",
  //   phoneNumber: "",
  //   address: "",
  //   social: "",
  // });

  // const validate = () => {
  //   const errors: any = {};

  //   if (!formValues.username) {
  //     errors.username = "Name is required";
  //   }

  //   if (!formValues.location) {
  //     errors.location = "Location is required";
  //   }

  //   if (!formValues.degree) {
  //     errors.degree = "Degree is required";
  //   }

  //   if (!formValues.designation) {
  //     errors.designation = "Designation is required";
  //   }

  //   if (!formValues.email) {
  //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //     if (!emailRegex.test(formValues.email)) {
  //       errors.email = "Invalid email format";
  //     } else {
  //       errors.email = "";
  //     }
  //   }

  //   if (!formValues.phoneNumber) {
  //     errors.mobile = "Mobile is required";
  //   } else if (!/^\d+$/.test(formValues.phoneNumber)) {
  //     errors.mobile = "Mobile must be a number";
  //   }

  //   if (!formValues.address) {
  //     errors.address = "Address is required";
  //   }

  //   if (!formValues.social) {
  //     errors.social = "Social URL is required";
  //   } else {
  //     try {
  //       new URL(formValues.social);
  //     } catch {
  //       errors.social = "Invalid URL format";
  //     }
  //   }

  //   setFormErrors(errors);
  //   return Object.keys(errors).length === 0;
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (validate()) {
  //     console.log(formValues);
  //     // Handle form submission
  //   }
  // };

  const { register, handleSubmit,reset,setValue,trigger, formState: { errors } } = useForm({
    resolver: yupResolver(editProfileSchema),
        mode: "all",
    reValidateMode: "onSubmit"
  });
  const onSubmit = data => {
    console.log("Form is about to be submitted");
    console.log(data);
    reset()
  };

  return (
    <div className="w-full md:max-w-2xl md:mx-auto">
      <h2 className="text-lg md:text-xl font-semibold">
        Edit Profile
      </h2>
      <form className="grid mt-8" onSubmit={handleSubmit(onSubmit)}>
        {/* BASIC FORM */}
        <div>
          <p className="w-full text-sm font-medium text-white bg-primaryBlue p-3">
          Personal information
          </p>
          <div className="bg-white px-4 py-2 md:px-8 md:py-4">
            {/* USERNAME & LOCATION */}
            <div className="grid md:grid-cols-2 md:gap-5">
              <div className="space-y-2">
                <Label name="username" label="Username" required={true} className="text-xs text-red-600" />
                <Input
                 
                  id="username"
                  type="text"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  onChange={(e:ChangeEvent<HTMLInputElement>) => {
                    setValue("username", sanitizeToLetters(e.target.value));
                    trigger("username");
                    
                    // // console.log(e.target.value);
                    // // const sanitizedValue = e.target.value;
                    // // setValue("firstName", sanitizedValue);
                    // // trigger("firstName");
          
                    // console.log(e.target.value); 
                    
                  }}
                  {...register("username")}
                />

                {errors.username && (
                  <p className="text-red-500 text-xs">
                    {errors.username.message}
                  </p>
                )}
              </div>
              <div className="space-y-2 mt-3 md:mt-0">
                <Label name="location" label="Location" className="text-xs text-red-600" required={true} />
                <Input
                  
                  id="location"
                  type="text"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  onChange={(e:ChangeEvent<HTMLInputElement>) => {
                    setValue("location", sanitizeToLetters(e.target.value));
                    trigger("location");
                  
                  }}
                  {...register("location")}
                />
                {errors.location && (
                  <p className="text-red-500 text-xs">
                    {errors.location.message}
                  </p>
                )}
              </div>
            </div>

            {/* DEGREE & DESIGNATION */}
            <div className="grid md:grid-cols-2 md:gap-5 md:mt-3">
              <div className="space-y-2 mt-3 md:mt-0">
                <Label name="Degree" label="Degree" className="text-xs text-red-600" required={true} />
                <Input
                  
                  id="degree"
                  type="text"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  onChange={(e:ChangeEvent<HTMLInputElement>) => {
                    setValue("degree", sanitizeToLetters(e.target.value));
                    trigger("degree");
                  
                  }}
                  {...register("degree")}
                />
                {errors.degree && (
                  <p className="text-red-500 text-xs">{errors.degree.message}</p>
                )}
              </div>
              <div className="space-y-2 mt-3 md:mt-0">
                <Label name="designation" label="Designation" className="text-xs text-red-600" required={true} />
                <Input
                  
                  id="designation"
                  type="text"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  onChange={(e:ChangeEvent<HTMLInputElement>) => {
                    setValue("designation", sanitizeToLetters(e.target.value));
                    trigger("designation");
                 
                  }}
                  {...register("designation")}
                />
                {errors.designation && (
                  <p className="text-red-500 text-xs">{errors.designation.message}</p>
                )}
              </div>
            </div>

            {/* EMAIL & PHONE */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 md:mt-3">
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
                  <p className="text-red-500 text-xs">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* PHONE */}
              <div className="space-y-2 mt-3 md:mt-0">
                <Label name="phone" label="Phone Number" className="text-xs text-red-600" required={true} />
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
             {/* ADDRESS */}
             <div className="grid space-y-2 mt-3">
              <Label name="address" label="Address" className="text-xs text-red-600" required={false} />
              <textarea
                className="w-full border border-gray-300 py-2 px-3 focus-visible:outline-primaryBlue"
                id="description"
                rows={3}
                cols={3}
              ></textarea>
            </div>
            

           
          </div>
        </div>

        {/* SOCIAL FORM */}
        <div className="mt-6">
          <p className="w-full text-sm font-medium text-white bg-primaryBlue p-3">
          Social accounts
          </p>

          <div className="bg-white px-4 py-2 md:px-8 md:py-4">
            {/* FACEBOOK & INSTAGRAM */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2 mt-3 md:mt-0">
                <label
                htmlFor="facebook"
                className="flex space-x-2 items-center  text-sm mb-1"
              >
                <FaFacebook className="" size={15} />
                <span>Facebook</span>
              </label>
                <Input
                  
                  id="facebook"
                  type="url"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  onChange={(e:ChangeEvent<HTMLInputElement>) => {
                    setValue("facebook", sanitizeToLetters(e.target.value));
                    trigger("facebook");
          
                  }}
                  {...register("facebook")}
                />
                {errors.facebook && (
                  <p className="text-red-500 text-xs">
                    {errors.facebook.message}
                  </p>
                )}
              </div>
              <div className="space-y-2 mt-3 md:mt-0">
              <label
                htmlFor="instagram"
                className="flex space-x-2 items-center  text-sm mb-1"
              >
                <FaInstagram className="" size={15} />
                <span>Instagram</span>
              </label>
                <Input
                  
                  id="instagram"
                  type="url"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  onChange={(e:ChangeEvent<HTMLInputElement>) => {
                    setValue("instagram", sanitizeToLetters(e.target.value));
                    trigger("instagram");
                    
                  }}
                  {...register("instagram")}
                />
                {errors.instagram && (
                  <p className="text-red-500 text-xs">
                    {errors.instagram.message}
                  </p>
                )}
              </div>
            </div>

            {/* TWITTER & LINKEDIN */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-4 mb-6">
              <div className="space-y-2 mt-3 md:mt-0">
              <label
                htmlFor="twitter"
                className="flex space-x-2 items-center  text-sm mb-1"
              >
                <FaTwitter className="" size={15} />
                <span>Twitter</span>
              </label>
                <Input
                  
                  id="twitter"
                  type="url"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  onChange={(e:ChangeEvent<HTMLInputElement>) => {
                    setValue("twitter", sanitizeToLetters(e.target.value));
                    trigger("twitter");
                    
                  }}
                  {...register("twitter")}
                />
                {errors.twitter && (
                  <p className="text-red-500 text-xs">
                    {errors.twitter.message}
                  </p>
                )}
              </div>
              <div className="grid space-y-2 mt-3 md:mt-0">
              <label
                htmlFor="linkedin"
                className="flex space-x-2 items-center  text-sm mb-1"
              >
                <FaLinkedin className="" size={15} />
                <span>LinkedIn</span>
              </label>
                <Input
                  
                  id="linkedin"
                  type="url"
                  className="w-full border border-gray-300 p-2 focus-visible:outline-primaryBlue"
                  onChange={(e:ChangeEvent<HTMLInputElement>) => {
                    setValue("linkedin", sanitizeToLetters(e.target.value));
                    trigger("linkedin");
                    
                  }}
                  {...register("linkedin")}
                />
                {errors.linkedin && (
                  <p className="text-red-500 text-xs">
                    {errors.linkedin.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <Button
            type="submit"
            styles="w-full md:w-auto bg-primaryBlue text-white hover:bg-primaryBlue/90 p-2 mb-4 md:mr-6"
          >
            Submit
          </Button>
          <Button
            type="submit"
            styles="w-full md:w-auto mt-4 text-center border text-gray-700 py-2 px-3 rounded-md hover:bg-gray-200"
            onClick={onCloseEditProfile}
          >
            Cancel
          </Button>
          {/* <button
            onClick={onCloseEditProfile}
            className="w-full md:w-auto bg-primaryBlue text-white hover:bg-primaryBlue/90 p-2 rounded ml-4 px-4 py-2 font-medium md:text-sm"
            type="button"
          >
            Cancel
          </button> */}
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
