import Logo from "@/components/Logo";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-primaryDarkBlue/90 flex justify-center items-center">
      <div className="flex bg-white shadow flex-col justify-center items-center w-[95%] md:w-1/3 rounded-sm py-8">
        <Link to="/">
          <Logo />
        </Link>
        <Outlet />
      </div>
    </div>
  );
}
