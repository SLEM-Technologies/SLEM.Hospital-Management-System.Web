import { useState } from "react";

import { FaUserDoctor } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import EditProfile from './EditProfile';

const status = "AVAILABLE";

function Profile() {
  const [editProfile, setEditProfile] = useState(false);

  function handleOpenEditProfile() {
    setEditProfile(true);
  }

  function handleCloseEditProfile() {
    setEditProfile(false);
  }

  return (
    <div className="w-full md:max-w-2xl md:mx-auto">
      <div className="w-full overflow-hidden">
        {/* SHOW PROFILE */}
        {!editProfile && (
          <div className="bg-white shadow-md rounded-md">
            <div className="flex sm:flex-col sm:items-center px-6 py-4 md:py-8">
              <img
                className="mx-auto sm:mx-0 sm:flex-shrink-0 h-24 rounded-full"
                src="https://i.pravatar.cc/60?u=4994716"
                alt="Profile"
              />
              <div className="mt-4 text-center">
                <h2 className="text-xl font-semibold leading-tight">
                  Alan Green
                </h2>
                <div className="mt-2">
                  <button onClick={() => handleOpenEditProfile()} className="ml-2 text-sm px-4 py-2 leading-none border rounded text-gray-700 bg-white hover:bg-gray-100">
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-sm leading-tight">About Me</h3>
                {status === "AVAILABLE" ? (
                  <p className="text-xs font-semibold px-2 py-1 rounded-full text-green-500 bg-green-100">
                    Available
                  </p>
                ) : (
                  <p className="text-xs font-semibold px-2 py-1 rounded-full bg-red-100  text-red-500">
                    Absent
                  </p>
                )}
              </div>
              <hr className="w-full h-[1px] my-2" />

              <div className="mt-2 text-xs grid grid-cols-2 md:grid-cols-3 gap-4 text-primaryDarkBlue">
                <div className="flex items-center space-x-2">
                  <FaUserGraduate size={15} />
                  <p>MBBS,MD</p>
                </div>
                <div className="flex items-center space-x-2">
                  <FaUserDoctor size={15} />
                  <p>Gynaecologist</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div>
                    <FaEnvelope size={15} />
                  </div>
                  <p>michael@gmail.com</p>
                </div>

                <div className="flex items-center space-x-2">
                  <FaPhone size={15} />
                  <p>+202-555-2828</p>
                </div>

                <div className="col-span-2 flex items-center space-x-2">
                  <FaLocationDot size={15} />
                  <p>795 Folsom Ave, Suite 600 San Francisco</p>
                </div>
              </div>

              <h3 className="font-bold text-sm leading-tight mt-6">Socials</h3>
              <hr className="w-full h-[1px] my-2" />

              <div className="mt-2 text-xs grid grid-cols-2 gap-3 text-primaryDarkBlue">
                <div className="flex items-center space-x-2">
                  <FaFacebook size={15} />
                  <Link to="http://facebook.com">alan green</Link>
                </div>
                <div className="flex items-center space-x-2">
                  <FaTwitter size={15} />
                  <Link to="https://x.com">@alan_green</Link>
                </div>
                <div className="flex items-center space-x-2">
                  <FaLinkedin size={15} />
                  <Link to="https://linkedlin">in/alan-green-511520249</Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SHOW EDIT PROFILE */}
        {editProfile && <EditProfile onCloseEditProfile={handleCloseEditProfile} />}
      </div>
    </div>
  );
}

export default Profile;
