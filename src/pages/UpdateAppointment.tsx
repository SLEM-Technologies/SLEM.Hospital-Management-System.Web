import { Patients } from "../data/constant";
import { useParams } from "react-router-dom";
import {
  FaCircleCheck,
  FaRegCalendarDays,
  FaCircleXmark,
} from "react-icons/fa6";
export default function UpdateAppointment() {
  const { id } = useParams();
  const selectedID = Number(id);
  const appointmentDetails = Patients;
  return (
    <div>
      {appointmentDetails.map((item, index) => {
        return selectedID === index ? (
          <div className='w-full' key={index}>
            <h1 className=' leading-tight tracking-wide text-lg md:text-xl font-semibold text-center'>
              Appointments
            </h1>
            <div className='w-full md:w-[30%] shadow border border-white rounded-md bg-white flex space-x-6 justify-between p-4 mx-auto mt-6'>
              <div className='flex flex-col '>
                <h2 className='font-bold leading-tight tracking-wide text-primaryBlue text-base mb-2 '>
                  {item.upcomingAppointmentsDate}
                </h2>
                <p className='text-primaryBlue font-bold'>Upcoming</p>
              </div>
              <div className='flex space-x-6 justify-center items-center'>
                <FaCircleCheck
                  size={20}
                  className='text-green-500 cursor-pointer'
                />
                <FaCircleXmark
                  size={20}
                  className='text-red-500 cursor-pointer'
                />
                <FaRegCalendarDays
                  size={20}
                  className='text-primaryBlue cursor-pointer'
                />
              </div>
            </div>
            <div className='w-full md:w-[30%] shadow border border-white rounded-md bg-white flex space-x-6 justify-between p-4 mx-auto mt-6'>
              <div className='flex flex-col '>
                <h2 className='font-bold leading-tight tracking-wide text-primaryBlue text-base mb-2 '>
                  {item.pastAppointmentsDate} at 10:00 AM
                </h2>
                <p className='text-gray-400'>Past</p>
              </div>
            </div>
          </div>
        ) : null;
      })}
    </div>
  );
}
