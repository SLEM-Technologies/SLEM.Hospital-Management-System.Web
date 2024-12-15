import * as yup from "yup";

// EDITPROFILESCHEMA

export const editProfileSchema = yup.object().shape({
    username: yup
      .string()
      .required("Username is required")
      .min(3,"Username must be at least 3 characters")
      .matches(/^[A-Za-z]+$/,"Username name must contain letters only"),
      location: yup
      .string()
      .required("Location is required")
      .min(3,"Location must be at least 3 characters")
      .matches(/^[A-Za-z]+$/,"Location name must contain letters only"),
      degree: yup
      .string()
      .required("Degree is required")
      .min(3,"Degree must be at least 3 characters")
      .matches(/^[A-Za-z]+$/,"Degree name must contain letters only"),
      designation: yup
      .string()
      .required("Designation is required")
      .min(3,"Designation must be at least 3 characters")
      .matches(/^[A-Za-z]+$/,"Designation name must contain letters only"),
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
      facebook: yup.string().url("Invalid URL"),
      twitter: yup.string().url("Invalid URL"),
      instagram: yup.string().url("Invalid URL"),
      linkedin: yup.string().url("Invalid URL")
      })

// EDIT MEDICAL HISTORY DETAILS
export const editMedicalHistory = yup.object().shape({
  allergies: yup
    .string()
    .required("Allergies are required")
    .min(3, "Allergies must be at least 3 characters"),
    chronicConditions: yup
    .string()
    .required("Chronic Conditions are required")
    .min(3, "Chronic Conditions must be at least 3 characters"),
   
    previousSurgeries: yup
    .string()
    .required("Previous surgeries are required")
    .min(3, "Previous surgeries must be at least 3 characters"),

    currentMedications: yup
    .string()
    .required("Current medications are required")
    .min(3, "Current medications must be at least 3 characters"),

    familyMedicalHistory: yup
    .string()
    .required("Family medical history are required")
    .min(3, "Family medical history must be at least 3 characters")

});

// EDIT CURRENT VISIT DETAILS

export const editCurrentVisitDetails = yup.object().shape({
  reasonForVisit: yup
    .string()
    .required("Reason for visit are required")
    .min(3, "Reason for visit must be at least 3 characters"),
    symptoms: yup
    .string()
    .required("Symptons are required")
    .min(3, "Symptoms must be at least 3 characters"),
   
    vitalSigns: yup
    .string()
    .required("Vital signs are required")
    .min(3, "Vital signs must be at least 3 characters"),

    diagnosis: yup
    .string()
    .required("Diagnosis are required")
    .min(3, "Diagnosis must be at least 3 characters"),

    treatmentPlan: yup
    .string()
    .required("Treatment plan are required")
    .min(3, "Treatment plan must be at least 3 characters")

});