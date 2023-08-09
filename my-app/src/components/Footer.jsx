import React from 'react';
import { BiLogoLinkedinSquare, BiLogoFacebook, BiLogoYoutube, BiLogoTiktok, BiLogoTwitter } from "react-icons/bi";
import { TfiSearch} from "react-icons/tfi";
const Footer = () => {
  return (
    <div className='bg-neutral-900 flex justify-around  text-white h-80 pt-16  font-poppins'>
      <div>
        <div className='font-semibold mb-3 text-xl'>Liên hệ với chúng tôi</div>
        <ul className='font-light '>
          <li className='mb-3'>welcometovietnam@gmail.com</li>
          <li>(+84) 123 456 789</li>
        </ul>
      </div>

      <div>
        <div className='mb-3 font-semibold text-xl'>Nội dung trang</div>
        <ul className='font-light '>
          <li className='mb-3'>Trang chủ</li>
          <li className='mb-3'>Du lịch</li>
          <li className='mb-3'>Văn hóa</li>
          <li className='mb-3'>Ẩm thực</li>
          <li>Về chúng tôi</li>
        </ul>
      </div>
      <div>
        <div className='font-semibold mb-3 text-xl'>Mạng xã hội</div>
          <ul className='flex'>
            <li className="mr-5 text-white text-[20px]"><BiLogoLinkedinSquare /></li>
            <li className="mr-5 text-white text-[20px]"><BiLogoFacebook /></li>
            <li className="mr-5 text-white text-[20px]"><BiLogoTwitter /></li>
            <li className="mr-5 text-white text-[20px]"><BiLogoYoutube /></li>
            <li className="mr-5 text-white text-[20px]"><BiLogoTiktok /></li>
          </ul>
      </div>
      <div>
        <div className='mb-3 font-semibold text-xl'>Tìm kiếm</div>
        <div className='relative inline-block'>
          <TfiSearch className='absolute text-black mt-3 ml-3'/>
        <input className='rounded-2xl border-solid boder-2 border-white-8 w-60 h-10 text-black pl-10 text-sm' type='text'/>
        </div>
       
      </div>


    </div>
  );
};

export default Footer;
