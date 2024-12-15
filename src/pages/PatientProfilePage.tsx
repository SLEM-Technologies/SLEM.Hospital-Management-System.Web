import { useParams } from "react-router-dom";
import { Patients } from "../data/constant";
import { FaAngleRight } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";
export default function PatientProfilePage(){
  const navigate = useNavigate();
    const patient = Patients;
    
    const { id } = useParams();
    const SelectedID = Number(id);
    function handleMedicalClick(e,index){
      navigate(`/account/patients/patient-profile/${index}/update-medical`);
      e.stopPropagation();

      

    }
    function handleVisitClick(e,index){
      navigate(`/account/patients/patient-profile/${index}/update-visit`);
      e.stopPropagation();

      

    }
    function handleAppointClick(e,index){
      navigate(`/account/patients/patient-profile/${index}/update-appointment`);
      e.stopPropagation();

      

    }
    function handleLabClick(e,index){
      navigate(`/account/patients/patient-profile/${index}/lab-result`);
      e.stopPropagation();

      

    }
    function handleImmuneClick(e,index){
      navigate(`/account/patients/patient-profile/${index}/immunization-record`);
      e.stopPropagation();

      

    }
    function handleNotesObervationClick(e,index){
      navigate(`/account/patients/patient-profile/${index}/notes-observations`);
      e.stopPropagation();

      

    }
    function handlePrecriptionClick(e,index){
      navigate(`/account/patients/patient-profile/${index}/precriptions`);
      e.stopPropagation();

      

    }
    function handleBillingClick(e,index){
      navigate(`/account/patients/patient-profile/${index}/billing-information`);
      e.stopPropagation();

      

    }
    function handleContactClick(e,index){
      navigate(`/account/patients/patient-profile/${index}/emergency-contacts`);
      e.stopPropagation();

      

    }
 
    return <div className='w-full '>
        <div className='w-full overflow-hidden mx-auto'>
    <h1 className="font-bold text-xl leading-tight tracking-wide px-6 text-center">Patient Information</h1>


        </div>
 
<div className='py-4 md:py-8'> 
{patient.map((item,index)=>{

    return SelectedID === index ? <div className="w-full md:w-[55%] grid grid-cols-1 space-y-4 mx-auto" key={index}>
    <Card >
<img
src={item.profile}
alt={item.name}
className='mx-auto sm:mx-0 sm:flex-shrink-0 h-24 rounded-full self-center'
/>
<h1 className="font-bold text-xl leading-tight my-6 self-center">{item.name}</h1>
<InnerCard>
<div className="grid grid-cols-[100px,1fr] gap-4 odd:bg-gray-200 even:bg-white p-4">
<h3 className="font-bold text-sm leading-tight tracking-wide">Gender</h3>
<p className="text-sm leading-tight capitalize tracking-wide">{item.gender}</p>
</div>
<div className="grid grid-cols-[100px,1fr] gap-4 odd:bg-gray-200 even:bg-white p-4">
<h3 className="font-bold text-sm leading-tight  tracking-wide">Date of Birth</h3>
<p className="text-sm leading-tight capitalize tracking-wide">{item.dob}</p>
</div>
<div className="grid grid-cols-[100px,1fr] gap-4 odd:bg-gray-200 even:bg-white p-4">
<h3 className="font-bold text-sm leading-tight tracking-wide">Patient ID</h3>
<p className="text-sm leading-tight capitalize tracking-wide">{item.patientID}</p>
</div>
<div className="grid grid-cols-[100px,1fr] gap-4 odd:bg-gray-200 even:bg-white p-4">
<h3 className="font-bold text-sm leading-tight tracking-wide">Contact</h3>
<p className="text-sm leading-tight capitalize tracking-wide">{item.number}</p>
</div>
<div className="grid grid-cols-[100px,1fr] gap-4 odd:bg-gray-200 even:bg-white p-4">
<h3 className="font-bold text-sm leading-tight tracking-wide">Email</h3>
<p className="text-sm leading-tight capitalize tracking-wide">{item.email}</p>
</div>
<div className="grid grid-cols-[100px,1fr] gap-4 odd:bg-gray-200 even:bg-white p-4">
<h3 className="font-bold text-sm leading-tight tracking-wide">Address</h3>
<p className="text-sm leading-tight capitalize tracking-wide">{item.address}</p>
</div>
</InnerCard>
    </Card>
    <Card >
      <div className="mt-4 px-4 flex justify-between w-full items-center">
      <h1 className="font-bold text-xl leading-tight">Medical History</h1>

 <FaAngleRight className="text-lg font-semibold cursor-pointer"  onClick={(e)=>handleMedicalClick(e,index)}/>
      </div>
  
      <hr className="w-full h-[1px] my-6" />
      <InnerCard>
      <div className="grid grid-cols-[100px,1fr] gap-4 odd:bg-gray-200 even:bg-white p-4">
<h3 className="font-bold text-sm leading-tight tracking-wide">Allegies</h3>
<p className="text-sm leading-tight capitalize tracking-wide">{item.allegies.join(', ')}</p>
</div>
<div className="grid grid-cols-[100px,1fr] gap-4 odd:bg-gray-200 even:bg-white p-4">
<h3 className="font-bold text-sm leading-tight  tracking-wide">Chronic Conditions</h3>
<p className="text-sm leading-tight capitalize tracking-wide">{item.chronicConditions.join(', ')}</p>
</div>
<div className="grid grid-cols-[100px,1fr] gap-4 odd:bg-gray-200 even:bg-white p-4">
<h3 className="font-bold text-sm leading-tight  tracking-wide">Previous Surgeries</h3>
<p className="text-sm leading-tight capitalize tracking-wide">{item.previousSurgeries}</p>
</div>
<div className="grid grid-cols-[100px,1fr] gap-4 odd:bg-gray-200 even:bg-white p-4">
<h3 className="font-bold text-sm leading-tight  tracking-wide">Current Medications</h3>
<p className="text-sm leading-tight capitalize tracking-wide">{item.currentMedications}</p>
</div>
<div className="grid grid-cols-[100px,1fr] gap-4 odd:bg-gray-200 even:bg-white p-4">
<h3 className="font-bold text-sm leading-tight  tracking-wide">Family Medical History</h3>
<p className="text-sm leading-tight capitalize tracking-wide">{item.familyMedicalHistory}</p>
</div>
      </InnerCard>
    </Card>

    <Card >
    <div className="mt-4 px-4 flex justify-between w-full items-center">
      <h1 className="font-bold text-xl leading-tight">Current Visit Details</h1>
      <FaAngleRight className="text-lg font-semibold cursor-pointer" onClick={(e)=>handleVisitClick(e,index)}/>
      </div>
  
      <hr className="w-full h-[1px] my-6" />
      <InnerCard>
      <div className="grid grid-cols-[100px,1fr] gap-4 odd:bg-gray-200 even:bg-white p-4">
<h3 className="font-bold text-sm leading-tight tracking-wide">Reason for Visit</h3>
<p className="text-sm leading-tight capitalize tracking-wide">{item.reasonForVisit}</p>
</div>
<div className="grid grid-cols-[100px,1fr] gap-4 odd:bg-gray-200 even:bg-white p-4">
<h3 className="font-bold text-sm leading-tight  tracking-wide">Symptoms</h3>
<p className="text-sm leading-tight capitalize tracking-wide">{item.symptoms.join(', ')}</p>
</div>
<div className="grid grid-cols-[100px,1fr] gap-4 odd:bg-gray-200 even:bg-white p-4">
<h3 className="font-bold text-sm leading-tight  tracking-wide">Vital Signs</h3>
<p className="text-sm leading-tight capitalize tracking-wide">{item.vitalSigns.join(', ')} 
</p>
</div>
<div className="grid grid-cols-[100px,1fr] gap-4 odd:bg-gray-200 even:bg-white p-4">
<h3 className="font-bold text-sm leading-tight  tracking-wide">Diagnosis</h3>
<p className="text-sm leading-tight capitalize tracking-wide">{item.diagnosis}</p>
</div>
<div className="grid grid-cols-[100px,1fr] gap-4 odd:bg-gray-200 even:bg-white p-4">
<h3 className="font-bold text-sm leading-tight  tracking-wide">Treatment plan</h3>
<p className="text-sm leading-tight capitalize tracking-wide">{item.treatmentPlan}</p>

</div>
      </InnerCard>
    </Card>
    <Card >
    <div className="mt-4 px-4 flex justify-between w-full items-center">
      <h1 className="font-bold text-xl leading-tight">Appointments</h1>
      <FaAngleRight className="text-lg font-semibold cursor-pointer" onClick={(e)=>handleAppointClick(e,index)}/>
      </div>
 
      <hr className="w-full h-[1px] my-6" />
      <InnerCard>
      <div className="grid grid-cols-[100px,1fr] gap-4 odd:bg-gray-200 even:bg-white p-4">
<h3 className="font-bold text-sm leading-tight tracking-wide">Upcoming Appointments</h3>
<p className="text-sm leading-tight capitalize tracking-wide">{item.upcomingAppointmentsDate}</p>
</div>
<div className="grid grid-cols-[100px,1fr] gap-4 odd:bg-gray-200 even:bg-white p-4">
<h3 className="font-bold text-sm leading-tight  tracking-wide">Past Appointments</h3>
<p className="text-sm leading-tight capitalize tracking-wide">{item.pastAppointmentsDate} - {item.pastAppointmentsDetail}</p>
</div>

      </InnerCard>
    </Card>
    <Card >
    <div className="mt-4 px-4 flex justify-between w-full items-center">
      <h1 className="font-bold text-xl leading-tight">Lab Results</h1>
      <FaAngleRight className="text-lg font-semibold cursor-pointer" onClick={(e)=>handleLabClick(e,index)}/>
      </div>
    
      <hr className="w-full h-[1px] my-6" />
      <InnerCard>
      <div className="grid grid-cols-[100px,1fr] gap-4 odd:bg-gray-200 even:bg-white p-4">
<h3 className="font-bold text-sm leading-tight tracking-wide">Recent Lab Tests</h3>
<p className="text-sm leading-tight capitalize tracking-wide">{item.recentLabTest} ({item.recentLabResult})</p>
</div>
<div className="grid grid-cols-[100px,1fr] gap-4 odd:bg-gray-200 even:bg-white p-4">
<h3 className="font-bold text-sm leading-tight  tracking-wide">Historical Lab</h3>
<p className="text-sm leading-tight capitalize tracking-wide">{item.historicalLabTest} ({item.historicalLabResult})</p>
</div>

      </InnerCard>
    </Card>
    <Card >
    <div className="mt-4 px-4 flex justify-between w-full items-center">
      <h1 className="font-bold text-xl leading-tight">Prescriptions</h1>
      <FaAngleRight className="text-lg font-semibold cursor-pointer" onClick={(e)=>handlePrecriptionClick(e,index)}/>
      </div>
      <hr className="w-full h-[1px] my-6" />
      <InnerCard>
      <div className="grid grid-cols-[100px,1fr] gap-4 odd:bg-gray-200 even:bg-white p-4">
<h3 className="font-bold text-sm leading-tight tracking-wide">Current Prescriptions</h3>
<p className="text-sm leading-tight capitalize tracking-wide">{item.currentPrecription} ({item.currentDosage} - {item.currentFrequency})</p>
</div>
<div className="grid grid-cols-[100px,1fr] gap-4 odd:bg-gray-200 even:bg-white p-4">
<h3 className="font-bold text-sm leading-tight  tracking-wide">Prescription History</h3>
<p className="text-sm leading-tight capitalize tracking-wide">{item.precriptionHistory} ({item.prescriptionHistoryDosage} - {item.precriptionHistoryFrequency})</p>
</div>

      </InnerCard>
    </Card>
    <Card >
    <div className="mt-4 px-4 flex justify-between w-full items-center">
      <h1 className="font-bold text-xl leading-tight">Immunization Records</h1>
      <FaAngleRight className="text-lg font-semibold cursor-pointer" onClick={(e)=>handleImmuneClick(e,index)}/>
      </div>
    
      <hr className="w-full h-[1px] my-6" />
      <InnerCard>
      <div className="grid grid-cols-[100px,1fr] gap-4 odd:bg-gray-200 even:bg-white p-4">
<h3 className="font-bold text-sm leading-tight tracking-wide">Vaccinations</h3>
<p className="text-sm leading-tight capitalize tracking-wide">{item.vaccine} ({item.vaccineDate})</p>
</div>


      </InnerCard>
    </Card>
    <Card >
    <div className="mt-4 px-4 flex justify-between w-full items-center">
      <h1 className="font-bold text-xl leading-tight">Notes and Observations</h1>
      <FaAngleRight className="text-lg font-semibold cursor-pointer" onClick={(e)=>handleNotesObervationClick(e,index)}/>
      </div>
  
      <hr className="w-full h-[1px] my-6" />
      <InnerCard>
      <div className="grid grid-cols-[100px,1fr] gap-4 odd:bg-gray-200 even:bg-white p-4">
<h3 className="font-bold text-sm leading-tight tracking-wide">Doctor's Notes</h3>
<p className="text-sm leading-tight capitalize tracking-wide">{item.doctorNote}</p>
</div>
<div className="grid grid-cols-[100px,1fr] gap-4 odd:bg-gray-200 even:bg-white p-4">
<h3 className="font-bold text-sm leading-tight tracking-wide">Nurse's Notes</h3>
<p className="text-sm leading-tight capitalize tracking-wide">{item.nurseNote}</p>
</div>


      </InnerCard>
    </Card>
    <Card >
    <div className="mt-4 px-4 flex justify-between w-full items-center">
      <h1 className="font-bold text-xl leading-tight">Billing Information</h1>
      <FaAngleRight className="text-lg font-semibold cursor-pointer" onClick={(e)=>handleBillingClick(e,index)}/>
      </div>
      <hr className="w-full h-[1px] my-6" />
      <InnerCard>
      <div className="grid grid-cols-[100px,1fr] gap-4 odd:bg-gray-200 even:bg-white p-4">
<h3 className="font-bold text-sm leading-tight tracking-wide">Insurance Details</h3>
<p className="text-sm leading-tight capitalize tracking-wide">{item.insuranceProvider}. - {item.issurancePolicyNumber}</p>
</div>
<div className="grid grid-cols-[100px,1fr] gap-4 odd:bg-gray-200 even:bg-white p-4">
<h3 className="font-bold text-sm leading-tight tracking-wide">Billing History</h3>
<p className="text-sm leading-tight capitalize tracking-wide">{item.billingDate} - {item.billingAmount} ({item.billingStatus})</p>
</div>
<div className="grid grid-cols-[100px,1fr] gap-4 odd:bg-gray-200 even:bg-white p-4">
<h3 className="font-bold text-sm leading-tight tracking-wide">Outstanding Bills</h3>
<p className="text-sm leading-tight capitalize tracking-wide">{item.outstandingBillsDate} - {item.outstandingBillsAmount} ({item.billingStatus})</p>
</div>


      </InnerCard>
    </Card>
    <Card >
    <div className="mt-4 px-4 flex justify-between w-full items-center">
      <h1 className="font-bold text-xl leading-tight">Emergency Contacts</h1>
      <FaAngleRight className="text-lg font-semibold cursor-pointer" onClick={(e)=>handleContactClick(e,index)}/>
      </div>
      <hr className="w-full h-[1px] my-6" />
      <InnerCard>
      <div className="grid grid-cols-[100px,1fr] gap-4 odd:bg-gray-200 even:bg-white p-4">
<h3 className="font-bold text-sm leading-tight tracking-wide">Primary Contact</h3>
<p className="text-sm leading-tight capitalize tracking-wide">{item.primaryContactName} ({item.primaryContactRelationship}) - undefined</p>
</div>
<div className="grid grid-cols-[100px,1fr] gap-4 odd:bg-gray-200 even:bg-white p-4">
<h3 className="font-bold text-sm leading-tight tracking-wide">Secondary Contact</h3>
<p className="text-sm leading-tight capitalize tracking-wide">{item.secondaryContactName} ({item.secondaryContactRelationship}) - undefined</p>
</div>



      </InnerCard>
    </Card>
    <Card >
    <div className="mt-4 px-4 flex justify-between w-full items-center">
      <h1 className="font-bold text-xl leading-tight">Consent Forms</h1>
      <FaAngleRight className="text-lg font-semibold"/>
      </div>

      <hr className="w-full h-[1px] my-6" />
      <InnerCard>
      <div className="grid grid-cols-[100px,1fr] gap-4 odd:bg-gray-200 even:bg-white p-4">
 <h3 className="font-bold text-sm leading-tight tracking-wide">Signed Consents</h3>
<p className="text-sm leading-tight capitalize tracking-wide">{item.signedConsents} ({item.signedConsents})</p>
</div>
<div className="grid grid-cols-[100px,1fr] gap-4 odd:bg-gray-200 even:bg-white p-4">
 <h3 className="font-bold text-sm leading-tight tracking-wide">Pending Consents</h3>
<p className="text-sm leading-tight capitalize tracking-wide">{item.pendingConsents} ({item.pendingConsents})</p>
</div>



      </InnerCard>
    </Card>
    <Card >
    <div className="mt-4 px-4 flex justify-between w-full items-center">
      <h1 className="font-bold text-xl leading-tight">Document and Attachments</h1>
      <FaAngleRight className="text-lg font-semibold"/>
      </div>
      <hr className="w-full h-[1px] my-6" />
      <InnerCard>
      <div className="grid grid-cols-[100px,1fr] gap-4 odd:bg-gray-200 even:bg-white p-4">
 <h3 className="font-bold text-sm leading-tight tracking-wide">Medical Records</h3>
<p className="text-sm leading-tight capitalize tracking-wide">{item.medicalRecords}...</p>
</div>
<div className="grid grid-cols-[100px,1fr] gap-4 odd:bg-gray-200 even:bg-white p-4">
 <h3 className="font-bold text-sm leading-tight tracking-wide">Radiology Images</h3>
<p className="text-sm leading-tight capitalize tracking-wide">{item.radiologyImages}...</p>
</div>



      </InnerCard>
    </Card>

    
    </div>   : null
})}

</div>
    </div>
    
}

function Card({children}){
return <div  className='bg-white shadow-md rounded-md w-full '>
  <div className="flex flex-col justify-start items-start mt-4 w-full" >
  {children}
  </div>
</div>
}

function InnerCard({children}){
  return <div className="flex flex-col border-2 border-gray-200 rounded-md w-[95%] mx-auto mb-6">
    {children}
  </div>

}