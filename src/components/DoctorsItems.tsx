import { IDoctorList } from "../data/constant";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { Status } from "../data/constant";
import { useNavigate } from "react-router-dom";


export default function DoctorsItems({ doctors, layoutType }:{doctors:IDoctorList[], layoutType:string}) {
  const navigate = useNavigate();

  const handleDoctorClick = (doctorId) => {
    navigate(`/doctors/doctor-profile/${doctorId}`); // Navigate to the profile page with the doctor ID
  };
    return (
      <ul
        className={`grid w-full ${
          layoutType === "grid" ? "md:grid-cols-3 gap-6" : "md:grid-cols-2 gap-2"
        } `}
      >
        {doctors.map((doctor,index) => (
          <li
            key={index}
            className="bg-white px-4 py-6 rounded-md relative"
          >
            <div
              className={`flex ${
                layoutType === "grid"
                  ? "flex-col justify-between space-y-6"
                  : "flex-row items-center space-x-3"
              } `}
            >
              <div
                className={`flex ${
                  layoutType === "grid"
                    ? "flex-col items-center justify-center space-y-1"
                    : "flex-row space-x-4 items-center"
                } `}
              >
                <img
                  src={doctor.profile}
                  alt="doctor image"
                  className={`rounded-full shadow-md`}
                  width={layoutType === "list" ? 30 : ""}
                  height={layoutType === "list" ? 30 : ""}
                />
                <h2 className="font-semibold text-sm text-primaryDarkBlue truncate ...">
                  {doctor.doctorName}
                </h2>
                <small className="font-semibold text-primaryDarkBlue">
                  {doctor.department}
                </small>
              </div>
              <div
                className={`flex ${
                  layoutType === "grid"
                    ? "flex-col space-y-6 justify-center items-center"
                    : "flex-row items-end space-x-3"
                } `}
              >
                <div className="flex space-x-3">
                  <span className="bg-white p-1 shadow rounded-full">
                    <Link to="#">
                      <FaFacebook size={18} className="text-primaryDarkBlue" />
                    </Link>
                  </span>
                  <span className="bg-white p-1 shadow rounded-full">
                    <Link to="#">
                      <FaInstagram size={18} className="text-primaryDarkBlue" />
                    </Link>
                  </span>
                  <span className="bg-white p-1 shadow rounded-full">
                    <Link to="#">
                      <FaTwitter size={18} className="text-primaryDarkBlue" />
                    </Link>
                  </span>
                </div>
                <div>
                  {doctor.status === Status.AVAILABLE && (
                    <p className="text-xs font-semibold text-green-500 px-4 py-1 rounded-full bg-green-100">
                      Available
                    </p>
                  )}
                  {doctor.status === Status.ABSEND && (
                    <p className="text-xs font-semibold text-red-500 px-4 py-1 rounded-full bg-red-100">
                      Absend
                    </p>
                  )}
                </div>
              </div>
            </div>
            <Dropdown layoutType={layoutType} onChange={()=>handleDoctorClick(index)} index={index}/>
          </li>
        ))}
      </ul>
    );
}