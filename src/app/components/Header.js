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
        <CiSearch size={24}/>
        <BsPerson size={24}/>
        <CiBookmark size={24}/>
        <IoBagOutline size={24}/>
        </div>
        </div> 
   <div className="flex items-center justify-center gap-4 text-sm p-4">
    <span>Bags</span>
    <span>Travel</span>
    <span>Accessories</span>
    <span>Gifting</span> 
    <span>Jwelery</span>
   </div>
    </div>
  )
}

export default Header
