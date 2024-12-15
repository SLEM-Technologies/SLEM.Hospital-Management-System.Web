import Logo from "@/components/Logo";
import { Outlet, Link } from "react-router-dom";
import { DashboardNavLinks } from "@/data/constant";
import settingIcon from "@/assets/icons/setting-icon.svg";
import { FaBell } from "react-icons/fa";
import avatar from "@/assets/images/avatar.png";
import AccountDropdown from "@/components/AccountDropdown";
import NotificationDropdown from "@/components/NotificationDropdown";

const notifications = [
    {title:"New Patient", message:"A new patient has been registered"},
    {title:"New Patient", message:"A new patient has been registered"},
    {title:"New Patient", message:"A new patient has been registered"},
    {title:"New Patient", message:"A new patient has been registered"},
    {title:"New Patient", message:"A new patient has been registered"},
    {title:"New Patient", message:"A new patient has been registered"},
]

export default function DashboardLayout() {
    return (
      <div className="max-w-full min-h-screen flex">
        <aside className="w-[20%] max-h-full z-10 flex flex-col px-4 py-3 shadow-[0_3px_3px_1px_rgba(0,0,0,0.1)]">
          <div className="pl-3 mb-10">
            <Logo />
          </div>
          <ul className="flex flex-col space-y-2 ">
            {DashboardNavLinks.map((navLink) => (
              <li key={navLink.name}>
                <Link
                  to={navLink.name}
                  className="flex p-3 justify-center md:justify-start items-center space-x-3 text-sm rounded-md hover:bg-[#f6f7fb] text-primaryGray font-medium"
                >
                  <span>
                    <navLink.icon
                      color="#afb6c0"
                      width={20}
                      height={20}
                      size={20}
                    />
                  </span>
                  <p className="hidden md:block">
                    <span className="capitalize">{navLink.name}</span>
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="w-full h-full pl-3 mt-16 pb-8 flex flex-col justify-between">
            <Link
              to="patients/add-patient"
              className=" w-[70%] hidden md:block px-4 py-2 bg-primaryBlue text-white font-medium rounded-md text-sm"
            >
              + Register Patient
            </Link>
            <Link
              to="/account/account-setting"
              className="flex justify-center md:justify-start space-x-3"
            >
              <img src={settingIcon} alt="setting" />
              <span className="text-primaryGray hidden md:block rounded-md font-medium text-sm">
                Settings
              </span>
            </Link>
          </div>
        </aside>
        <main className="w-[80%] h-full">
          <header className="flex justify-end z-20 border-b-2 border-gray-200 items-center h-[10%] px-6 py-2 bg-white">
            <ul className="flex items-center space-x-4">
              <NotificationDropdown notifications={notifications}>
                <li className="relative cursor-pointer">
                  <FaBell className="text-primaryBlue" size={21} />
                  <div className="absolute flex justify-center items-center text-[0.54rem] font-semibold text-white -top-[5px] left-2 z-10 rounded-full h-3.5 w-3.5 bg-red-500">
                    <span>{notifications.length}</span>
                  </div>
                </li>
              </NotificationDropdown>
              <AccountDropdown>
                <li className="cursor-pointer">
                  <img
                    src={avatar}
                    alt="user profile"
                    width={25}
                    height={25}
                    className="rounded-full shadow-[0_2px_6px_3px_rgba(0,0,0,0.1)]"
                  />
                </li>
              </AccountDropdown>
            </ul>
          </header>
          <section className="min-h-screen  bg-[#f6f7fb] p-3 md:p-5">
            <Outlet />
          </section>
        </main>
      </div>
    );
}