import { Patients } from "../data/constant";
import { useParams } from "react-router-dom";
// import Button from "@/components/Button";
import { FaArrowRightToBracket } from "react-icons/fa6";
export default function LabResultDetails() {
  const { id } = useParams();
  const selectedID = Number(id);
  const labResultDetails = Patients;
  return (
    <div>
      {labResultDetails.map((item, index) => {
        return selectedID === index ? (
          <div className='w-full relative min-h-screen' key={index}>
            <h1 className=' leading-tight tracking-wide text-lg md:text-xl font-semibold text-center'>
              Lab Results
            </h1>
            <div className='w-full md:w-[30%] shadow border border-white rounded-md bg-white flex space-x-6 justify-between p-4 mx-auto mt-6'>
              <div className='flex flex-col '>
                <h2 className='font-bold leading-tight tracking-wide text-primaryBlue text-base mb-2 '>
                  {item.recentLabTest}
                </h2>
                <p className='text-gray-500 mb-2'>{item.recentLabResult}</p>
                <p className='text-gray-400'>{item.recentLabDate}</p>
              </div>
            </div>
            <div className='w-full md:w-[30%] shadow border border-white rounded-md bg-white flex space-x-6 justify-between p-4 mx-auto mt-6'>
              <div className='flex flex-col '>
                <h2 className='font-bold leading-tight tracking-wide text-primaryBlue text-base mb-2 '>
                  {item.historicalLabTest}
                </h2>
                <p className='text-gray-500 mb-2'>{item.historicalLabResult}</p>
                <p className='text-gray-400'>{item.historicalLabDate}</p>
              </div>
            </div>
       
            <div className="absolute bottom-0 md:bottom-0 w-full flex justify-center items-center mb-6">
        <button
          type="submit"
          className="w-full px-4 text-lg md:w-auto bg-primaryBlue text-white hover:bg-primaryBlue/90 py-4  px-12 flex justify-center items-center rounded-md"
        >
          <span className="mr-4">
            <FaArrowRightToBracket size={20} />
          </span>
          Download PDF
        </button>
      </div>
          </div>
        ) : null;
      })}
    </div>
  );
}
