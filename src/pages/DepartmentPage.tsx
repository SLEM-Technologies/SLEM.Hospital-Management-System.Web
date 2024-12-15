import DepartmentsTable from "@/components/DepartmentsTable";
import EmployeeBarchart from "@/components/EmployeeBarchart";
import TotalPieChart from "@/components/TotalPiecharts";
import { DepartmentsData } from "@/data/constant";
import { Link } from "react-router-dom";

const headers = ["Department Name", "Doctor", "Head of Department", "Status", "Actions"];

export default function DepartmentsPage() {
  return (
    <div className="flex flex-col md:space-y-6">
      <div className="hidden md:flex w-full space-x-4 ">
        <div className="w-[38%] h-80 shadow-md bg-white rounded-md px-6">
          <header className="flex justify-between items-center py-3">
            <h2 className="font-bold text-lg text-primaryDarkBlue">
              Total Departments
            </h2>
          </header>
          <main className="">
            <TotalPieChart />
          </main>
        </div>
        <div className="w-[62%] h-80 shadow-md bg-white rounded-md">
          <header className="flex justify-between items-center px-6 py-4">
            <h2 className="font-bold text-lg text-primaryDarkBlue">
              Employees
            </h2>
            <p className="text-sm font-medium text-primaryDarkBlue">
              Number of staff according to departments
            </p>
          </header>
          <main>
            <EmployeeBarchart />
          </main>
        </div>
      </div>
      <div className="w-full flex space-x-4">
        <div className="w-full shadow-md bg-white rounded-md px-5">
          <header className="flex flex-col md:flex-row md:justify-between items-center pt-4">
            <h2 className="font-bold text-sm md:text-lg text-primaryDarkBlue">
              Departments List
            </h2>
            <div className="flex items-center space-x-6">
              <p className="text-xs md:text-sm hover:underline font-semibold cursor-pointer text-primaryBlue">
                View All
              </p>
              <Link to="/account/departments/add-department">
                <button className="text-xs md:text-sm py-1 px-2 rounded-full bg-[#fff4f3] text-primaryOrange">
                  Add Departments
                </button>
              </Link>
            </div>
          </header>
          <main className="mt-6">
            <DepartmentsTable headers={headers} departments={DepartmentsData} />
          </main>
        </div>
      </div>
    </div>
  );
}
