import * as yup from "yup";

export const accountSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/,
      "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

// LOGIN SCHEMA

export const loginSchema  = yup.object().shape({
  email: yup.string().required("Email is required").matches(/^\S+@\S+$/i,"Entered value does not match email format"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/,
      "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character"
    ),
  
  })

// SIGNUP SCHEMA

export const signUpSchema  = yup.object().shape({
  email: yup.string().required("Email is required").matches(/^\S+@\S+$/i,"Entered value does not match email format"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/,
      "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character"
    ),
    phoneNumber: yup 
    .string()
    .required("Phone number is required")
    .test('is-11-digits','Phone number must be digits only',(value) => /^\d{1,11}$/.test(value))
    .min(11,"Phone number cannot be less than 11 digits")
    .max(11,"Phone number cannot exceeds 11 digits"),
    firstName:yup
    .string()
    .required("First name is required")
    .min(3,"First name must be at least 3 characters")
    .matches(/^[A-Za-z]+$/,"First name must contain letters only"),
    lastName: yup
    .string()
    .required("Last name is required")
    .min(3,"Last name must be at least 3 characters")
    .matches(/^[A-Za-z]+$/,"Last name must contain letters only"),
    username: yup.string().required("Username is required"),


  })

// REGISTER PATIENT SCHEMA
export const registerPatientSchema = yup.object().shape({
  firstName: yup
  .string()
  .required("First name is required")
  .min(3,"First name must be at least 3 characters")
  .matches(/^[A-Za-z]+$/,"First name must contain letters only"),
  lastName: yup
  .string()
  .required("Last name is required")
  .min(3,"Last name must be at least 3 characters")
  .matches(/^[A-Za-z]+$/,"Last name must contain letters only"),
  email: yup
  .string()
  .required("Email is required")
  .matches(/^\S+@\S+$/i,"Entered value does not match email format"),
  phone:yup
  .string()
  .required("Phone number is required")
  .test('is-11-digits','Phone number must be digits only',(value) => /^\d{1,11}$/.test(value))
  .min(11,"Phone number cannot be less than 11 digits")
  .max(11,"Phone number cannot exceeds 11 digits"),
 
  gender: yup
  .string()
  .oneOf(['male','female'], 'invalid gender')
  .required('Gender is required'),
  age:yup
  .number()
  .required('Age is required')
  .min(25,'Mininum age must be 25')
  .max(80,'Maximum age must be 80'),
  // date:yup
  // .string()
  // .required("Date is required"),
  doctorName:yup
  .string()
  .required("Doctor name is required")
  .min(3,"Doctor name must be at least 3 characters")
  .matches(/^[A-Za-z]+$/,"Doctor name must contain letters only"),
  staffOnDuty:yup
  .string()
  .required("Staff on duty name is required")
  .min(3,"Staff on duty name must be at least 3 characters")
  .matches(/^[A-Za-z]+$/,"Staff on duty name must contain letters only"),
  wardNo:yup
  .string()
  .required("Ward number is required")
  .test('is-11-digits','Ward number must be digits only',(value) => /^\d{1,5}$/.test(value))
  .min(5,"Ward number cannot be less than 5 digits")
 


})

// DEPARTMENT FORM SCHEMA

export const departmentFormSchema =  yup.object().shape({

departmentName: yup
.string()
.required("Department name is required")
.min(3,"Department name must be at least 3 characters")
.matches(/^[A-Za-z]+$/,"Department name must contain letters only"),
doctor: yup
.string()
.oneOf(['0','1','2','3','4','5'], 'invalid name')
.required('Head of department is required'),
headDepartment: yup
.string()
.oneOf(['0','1','2','3','4','5'], 'invalid name')
.required('Head of department is required'),
status: yup
.string()
.oneOf(['active','inactive'], 'invalid status')
.required('Status is required'),
})

// ADD NEW PRESCRIPTION
export const addNewPrescription =  yup.object().shape({

  medication: yup
  .string()
  .required("Medication is required")
  .min(3,"Medication must be at least 3 characters")
  .matches(/^[A-Za-z]+$/,"Medication must contain letters only"),
  dosage: yup
  .string()
  .required("Dosage is required")
  .min(3,"Dosage must be at least 3 characters")
  .matches(/^[A-Za-z0-9]+$/,"Dosage must contain numbers and letters only"),
  frequency: yup
  .string()
  .required("Frequency is required")
  .min(3,"Frequency must be at least 3 characters")
  .matches(/^[A-Za-z]+$/,"Frequency must contain letters only"),
})

// ADD A NEW EMERGENCY fCONTACT
export const addNewContact =  yup.object().shape({

  name: yup
  .string()
  .required("Name is required")
  .min(3,"Name must be at least 3 characters")
  .matches(/^[A-Za-z]+$/,"Name must contain letters only"),
  relationship: yup
  .string()
  .required("Relationship is required")
  .min(3,"Relationship must be at least 3 characters")
  .matches(/^[A-Za-z]+$/,"Relationship must contain letters only"),
  phone:yup
  .string()
  .required("Contact number is required")
  .test('is-11-digits','Phone number must be digits only',(value) => /^\d{1,11}$/.test(value))
  .min(11,"Contact number cannot be less than 11 digits")
  .max(11,"Contact number cannot exceeds 11 digits"),
})
  

// SOCIAL SCHEMA
export const socialSchema = yup.object().shape({
  facebook: yup.string().url("Invalid URL"),
  twitter: yup.string().url("Invalid URL"),
  instagram: yup.string().url("Invalid URL"),
  linkedin: yup.string().url("Invalid URL"),
});