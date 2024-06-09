import { CiSearch } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex-col p-4 bg-black text-[#E5DFD9]">
       <div className="flex justify-between items-center">
        <p className="text-lg lg:text-xl">TANN TRIM</p>
        <div className="flex gap-4"> 
        <CiSearch size={24} className="cursor-pointer"/>
        <BsPerson size={24} className="cursor-pointer"/>
        <CiBookmark size={24} className="cursor-pointer"/>
        <IoBagOutline size={24} className="cursor-pointer"/>
        </div>
        </div> 
   <div className="flex items-center justify-center gap-4 text-sm p-4">
    <span className="cursor-pointer">Bags</span>
    <span className="cursor-pointer">Travel</span>
    <span className="cursor-pointer">Accessories</span>
    <span className="cursor-pointer">Gifting</span> 
    <span className="cursor-pointer">Jwelery</span>
   </div>
    </div>
  )
}

export default Header
