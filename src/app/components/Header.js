import { CiSearch } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
        <p className="text-lg lg:text-xl">TANN TRIM</p>
        <div className="flex gap-4"> 
        <CiSearch size={24}/>
        <BsPerson size={24}/>
        <CiBookmark size={24}/>
        <IoBagOutline size={24}/>
        </div>
    </div>
  )
}

export default Header
