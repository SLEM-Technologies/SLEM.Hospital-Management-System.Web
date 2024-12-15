import { Patients } from "@/data/constant";
import PaginationLinks from "@/components/PaginationLinks";
import { PatientsTable } from "@/components/PatientsTable";
import SearchBar from "@/components/SearchBar";
import { Link } from "react-router-dom";
import Button from "@/components/Button";
import {   useRef } from "react";



const headers = [
  "Profile",
  "Patients ID",
  "Name",
  "Age",
  "Address",
  "Number",
  "Last Visit",
  "Status",
];

export default function PatientsPage() {
const index=useRef(null)


  return (
    <div>
      <nav className="mb-4 md:hidden w-full">
        <PaginationLinks />
      </nav>
      <Link
        to="/account/patients/add-patient"
        className="block w-full md:hidden"
      >
        <Button
          type="button"
          styles="w-full mb-4 bg-primaryBlue text-white hover:bg-primaryBlue/90"
        >
          +Register Patient
        </Button>
      </Link>
      <div className="space-y-5 bg-white rounded-md p-5 shadow-md">
        <SearchBar placeholder="Search for a patient" />
      <PatientsTable headers={headers} patients={Patients}  patientIndex={index} ref={index} /> 
      
      </div>
      <nav className="mt-10 hidden md:block w-full">
        <PaginationLinks />
      </nav>
    </div>
  );
}
