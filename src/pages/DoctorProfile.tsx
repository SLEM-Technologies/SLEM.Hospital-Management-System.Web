
import { Doctors, Status } from "../data/constant";
import { useParams } from "react-router-dom";

const status = Status.AVAILABLE;

export default function DoctorProfile() {
  const { id } = useParams();

  const SelectedID = Number(id);
  const doctors = Doctors;


  return (
    <div className='w-full md:max-w-2xl md:mx-auto'>
      <div className='w-full overflow-hidden'>
    
          <div className='bg-white shadow-md rounded-md'>
            <div className='flex sm:flex-col sm:items-center px-4 md:px-6 py-4 md:py-8'>
              {doctors.map((doctorItem, index) => {
                return SelectedID === index ? (
                  <DoctorListItems
                    doctorItem={doctorItem}
               
                    key={index}
                  />
                ) : null;
              })}
            </div>
          </div>
       
      </div>
    </div>
  );
}

function DoctorListItems({ doctorItem }) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img
        src={doctorItem.profile}
        alt={doctorItem.doctorName}
        className='mx-auto sm:mx-0 sm:flex-shrink-0 h-24 rounded-full'
      />
      <div className='mt-4 text-center'>
        <h2 className='text-xl font-semibold leading-tight'>
          {doctorItem.doctorName}
        </h2>
        <h3 className='text-gray-500 text-xl font-semibold leading-tight'>
          {doctorItem.department}
        </h3>
      </div>
      <div className=' px-4 md:px-6 py-4'>
        <div className='flex items-center justify-between'>
          <h3 className='font-bold text-sm leading-tight'>About Me</h3>
          {status === doctorItem?.status ? (
            <p className='text-xs font-semibold px-2 py-1 rounded-full text-green-500 bg-green-100'>
              Available
            </p>
          ) : (
            <p className='text-xs font-semibold px-2 py-1 rounded-full bg-red-100  text-red-500'>
              Absent
            </p>
          )}
        </div>
        <hr className='w-full h-[1px] my-2' />

        <div className='text-xs grid grid-cols-1 md:grid-cols-1  text-primaryDarkBlue w-full'>
          <div className='flex flex-col w-full'>
            <div className='flex items-center flex-col space-y-2'>
              <div className='w-full'>
                {" "}
                <h3 className='font-bold text-sm leading-tight mt-2'>
                  Contact Information
                </h3>
                <p className="text-sm my-1">Phone: {doctorItem.phone}</p>
                <p>Email: {doctorItem.email}</p>
              </div>
            </div>

            <div>
              <h3 className='font-bold text-sm leading-tight mt-4'>Patients</h3>
              <h4 className="text-sm my-1">{doctorItem.patient}</h4>
              <p>Age: {doctorItem.patientAge}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
