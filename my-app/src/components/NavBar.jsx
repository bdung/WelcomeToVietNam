import React from 'react'
import {BiLogoLinkedinSquare,BiLogoFacebook,BiLogoYoutube,BiLogoTiktok,BiLogoTwitter} from "react-icons/bi";
function Navbar() {
   const verticalLine = {
      borderLeft: "2px solid white ",
      height: "18px"
   }
  
  return (
   <nav className="w-full flex py-6 justify-between items-center navbar bg-black opacity-30 absolute">

   <ul className="list-none sm:flex hidden justify-end items-center flex-1 mr-8 ">
    
     <li  className="font-poppins font-normal cursor-pointer text-[14px] hover:underline decoration-900 underline-offset-8 decoration-2 text-white mr-10  " >Trang chủ</li>
     <li  className="font-poppins font-normal cursor-pointer text-[14px] hover:underline decoration-900 underline-offset-8 decoration-2 text-white mr-10 " >Du lịch</li>
     <li  className="font-poppins font-normal cursor-pointer text-[14px] hover:underline decoration-900 underline-offset-8 decoration-2 text-white mr-10 " >Ẩm thực</li>
     <li  className="font-poppins font-normal cursor-pointer text-[14px] hover:underline decoration-900 underline-offset-8 decoration-2 text-white mr-10 " >Văn hóa</li>
     <li  className="font-poppins font-normal cursor-pointer text-[14px] hover:underline decoration-900 underline-offset-8 decoration-2 text-white mr-10 " >Về chúng tôi</li>
     <li style={verticalLine}></li>
     <li className="mr-5 ml-10 text-white text-[20px]"> <BiLogoLinkedinSquare/></li>
     <li className="mr-5 text-white text-[20px]"><BiLogoFacebook/></li>
     <li className="mr-5 text-white text-[20px]"><BiLogoTwitter/></li>
     <li className="mr-5 text-white text-[20px]"><BiLogoYoutube/></li>
     <li className="mr-5 text-white text-[20px]"><BiLogoTiktok/></li>

   </ul>
   
 </nav>
  );
}

export default Navbar;

