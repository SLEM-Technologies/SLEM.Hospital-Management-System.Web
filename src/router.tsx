import {
  Navigate,
  Outlet,
  createBrowserRouter,
} from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout";
import DashboardPage from "./pages/DashboardPage";
import DoctorsPage from "./pages/DoctorsPage";
import AppointmentsPage from "./pages/AppointmentsPage";
import DepartmentsPage from "./pages/DepartmentPage";
import PatientsPage from "./pages/PatientsPage";
import PatientProfilePage from "./pages/PatientProfilePage";
import UpdateMedicalHistory from "./pages/UpdateMedicalHistory";
import RegisterPatientPage from "./pages/RegisterPatientPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AddDoctor from "./pages/AddDoctor";
import AddDepartment from "./pages/AddDepartment";
import AuthLayout from "./layouts/AuthLayout";
import Profile from "./pages/ProfilePage";
import AccountSettings from "./pages/AccountSetting";
import DoctorProfile from "./pages/DoctorProfile";
import UpdateCurrentVisitDetails from "./pages/UpdateCurrentVisitDetails";
import UpdateAppointment from './pages/UpdateAppointment'
import LabResultDetail from './pages/LabResultDetail'
import ImmunizationRecordDetail from "./pages/ImmunizationRecordDetail";
import NotesObservations from "./pages/NotesObservations";
import PrecriptionsDetail from "./pages/PrecriptionsDetail";
import BillingDetail from "./pages/BillingDetail";
import EmergencyContactDetail from "./pages/EmergencyContactDetail";
import AuthProvider from "./services/AuthProvider";
import PrivateRoute from "./authentication/PrivateRoute";

// Create the router configuration
export const router = createBrowserRouter([
  { 
   
    element: (
      <AuthProvider>
        <Outlet /> {/* This is where child routes will be rendered */}
      </AuthProvider>
    ),
    children: [
      {
        path: "/",
        element: <AuthLayout />,
        children: [
          { index: true, element: <Navigate replace to="auth/login" /> },
          { path: "auth/login", element: <Login /> },
          { path: "auth/signup", element: <SignUp /> },
        ],
      },
      {
        path:'account',
        element:<PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>, // Protect this route
        children: [
          { index: true, element: <Navigate replace to="dashboard" /> },
          { path: "dashboard", element: <DashboardPage /> },
          { path: "appointments", element: <AppointmentsPage /> },
          {
            path: "departments",
            children: [
              { index: true, element: <Navigate replace to="all-departments" /> },
              { path: "all-departments", element: <DepartmentsPage /> },
              { path: "add-department", element: <AddDepartment /> },
            ],
          },
          {
            path: "doctors",
            children: [
              { index: true, element: <Navigate replace to="all-doctors" /> },
              { path: "all-doctors", element: <DoctorsPage /> },
              { path: "add-doctor", element: <AddDoctor /> },
              {path:"doctor-profile/:id",element:<DoctorProfile/>}
            ],
          },
          {
            path: "patients",
            children: [
              { index: true, element: <Navigate replace to="all-patients" /> },
              { path: "all-patients", element: <PatientsPage /> },
              { path: "add-patient", element: <RegisterPatientPage /> },
              { path: "patient-profile/:id", element: <PatientProfilePage /> },
              { path: "patient-profile/:id/update-medical", element: <UpdateMedicalHistory /> },
              { path: "patient-profile/:id/update-visit", element: <UpdateCurrentVisitDetails /> },
              { path: "patient-profile/:id/update-appointment", element: <UpdateAppointment /> },
              { path: "patient-profile/:id/lab-result", element: <LabResultDetail /> },
              { path: "patient-profile/:id/immunization-record", element: <ImmunizationRecordDetail /> },
              { path: "patient-profile/:id/notes-observations", element: <NotesObservations /> },
              { path: "patient-profile/:id/precriptions", element: <PrecriptionsDetail /> },
              { path: "patient-profile/:id/billing-information", element: <BillingDetail /> },
              { path: "patient-profile/:id/emergency-contacts", element: <EmergencyContactDetail /> },
            ],
          },
          {
            path: "profile",
            element: <Profile />
          },
          {
            path: "account-setting",
            element: <AccountSettings />
          }
        ],
      },
  
    ],
  },
]);


// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <AuthProvider>
//         <Outlet /> {/* This is where child routes will be rendered */}
//       </AuthProvider>
//     ),
  
//   {
//     path: "account",
//     element: <DashboardLayout />,
//     children: [
//       { index: true, element: <Navigate replace to="dashboard" /> },
//       { path: "dashboard", element: <DashboardPage /> },
//       { path: "appointments", element: <AppointmentsPage /> },
//       {
//         path: "departments",
//         children: [
//           { index: true, element: <Navigate replace to="all-departments" /> },
//           { path: "all-departments", element: <DepartmentsPage /> },
//           { path: "add-department", element: <AddDepartment /> },
//         ],
//       },
//       {
//         path: "doctors",
//         children: [
//           { index: true, element: <Navigate replace to="all-doctors" /> },
//           { path: "all-doctors", element: <DoctorsPage /> },
//           { path: "add-doctor", element: <AddDoctor /> },
//           {path:"doctor-profile/:id",element:<DoctorProfile/>}
//         ],
//       },
//       {
//         path: "patients",
//         children: [
//           { index: true, element: <Navigate replace to="all-patients" /> },
//           { path: "all-patients", element: <PatientsPage /> },
//           { path: "add-patient", element: <RegisterPatientPage /> },
//           { path: "patient-profile/:id", element: <PatientProfilePage /> },
//           { path: "patient-profile/:id/update-medical", element: <UpdateMedicalHistory /> },
//           { path: "patient-profile/:id/update-visit", element: <UpdateCurrentVisitDetails /> },
//           { path: "patient-profile/:id/update-appointment", element: <UpdateAppointment /> },
//           { path: "patient-profile/:id/lab-result", element: <LabResultDetail /> },
//           { path: "patient-profile/:id/immunization-record", element: <ImmunizationRecordDetail /> },
//           { path: "patient-profile/:id/notes-observations", element: <NotesObservations /> },
//           { path: "patient-profile/:id/precriptions", element: <PrecriptionsDetail /> },
//           { path: "patient-profile/:id/billing-information", element: <BillingDetail /> },
//           { path: "patient-profile/:id/emergency-contacts", element: <EmergencyContactDetail /> },
//         ],
//       },
//       {
//         path: "profile",
//         element: <Profile />
//       },
//       {
//         path: "account-setting",
//         element: <AccountSettings />
//       }
//     ],
//   },
//   {
//     path: "auth",
//     element: <AuthLayout />,
//     children: [
//       { index: true, element: <Navigate replace to="login" /> },
//       { path: "login", element: <Login /> },
//       { path: "signup", element: <SignUp /> },
//     ],
//   },
// ]);