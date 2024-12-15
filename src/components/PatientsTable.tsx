import { IPatients } from "@/data/constant";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { TableData } from "./TableData";
import { useNavigate } from "react-router-dom";
import { LegacyRef, MutableRefObject } from "react";

export function PatientsTable({
  headers,
  patients,
  patientIndex,
  ref


}: {
  headers: string[];
  patients: IPatients[];
  patientIndex:MutableRefObject<number>;
  ref:LegacyRef<HTMLTableRowElement>




}) {
  const navigate = useNavigate();

  const handlePatientClick = (patientId) => {
    navigate(`/account/patients/patient-profile/${patientId}`);
     // Navigate to the profile page with the patient ID
     
  };
  
  
  return (
 
    <TableData headers={headers}>
       
      <TableBody className="space-y-2 text-xs md:text-base">
        {patients.map((patient,index) => (
            // calling it onClick for the onRowClick will cause a conflict on the onClick event
            <TableRow key={patient.name} onRowClick={()=>handlePatientClick(index)} index={patientIndex}  ref={ref} >
            <TableCell className="font-medium ">
              <img
                className="rounded-full"
                src={patient.profile}
                alt="profile image"
          
              />
  
            </TableCell>
            <TableCell>{patient.patientID}</TableCell>
            <TableCell>{patient.name}</TableCell>
            <TableCell>{patient.age}</TableCell>
            <TableCell>{patient.address}</TableCell>
            <TableCell>{patient.number}</TableCell>
            <TableCell>{patient.lastVist}</TableCell>
            <TableCell>
              <span className={`border text-xs px-1 py-0 rounded-md ${patient.status === "APPROVED"? "border-green-500 text-green-500":"border-red-500 text-red-500"}`}>{patient.status}</span>
            </TableCell>
          </TableRow>

     
          
        ))}
      </TableBody>
     
    </TableData>
  
  );
}
