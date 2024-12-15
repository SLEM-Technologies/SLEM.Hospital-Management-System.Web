import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaEllipsisVertical } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {ChangeEventHandler} from 'react';

export default function Dropdown({layoutType,onChange,index}:{layoutType:string,onChange:ChangeEventHandler<HTMLInputElement>,index:number}) {
 

    return (
      <div
        className={`absolute right-1 ${
          layoutType === "list" ? "top-5" : "top-3"
        }`}
      >
        <DropdownMenu>
          <DropdownMenuTrigger>
            <FaEllipsisVertical size={20} className="text-primaryDarkBlue" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onChange={onChange}><Link to={`/account/doctors/doctor-profile/${index}`} className="w-full md:w-auto">Profile</Link></DropdownMenuItem>
            <DropdownMenuItem
              onClick={()=>(document.getElementById('my_modal_2') as HTMLDialogElement).showModal()}
            >
              Assign
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
}