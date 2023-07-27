import React from 'react';
import BlogPost from './BlogPost';
import { FaAngleRight } from "react-icons/fa";

const HighlightedSection = () => {
    const posts = [
        {
          url: "http://localhost:3000/assets/culture_blog_01.jpg",
          title: "Đấu tranh bảo vệ các giá trị văn hóa truyền thống",
          uploadTime: "03/04/2023",
          timeForRead: "3 phút đọc",
          like: "1130",
          comment: "244"
        },
        {
          url: "http://localhost:3000/assets/culture_blog_02.jpg",
          title: "Bộ VHTTDL sẽ tổ chức Triển lãm Du lịch qua các miền Di sản...",
          uploadTime: "05/04/2023",
          timeForRead: "4 phút đọc",
          like: "329",
          comment: "50"
        },
        {
            url: "http://localhost:3000/assets/culture_blog_03.jpg",
            title: `Triển lãm "Không gian Di sản Văn hóa Việt Nam"`,
            uploadTime: "03/04/2023",
            timeForRead: "2 phút đọc",
            like: "420",
            comment: "13"
        },
        {
          url: "http://localhost:3000/assets/culture_blog_03.jpg",
          title: `Triển lãm "Không gian Di sản Văn hóa Việt Nam"`,
          uploadTime: "03/04/2023",
          timeForRead: "2 phút đọc",
          like: "420",
          comment: "13"
      },

      ];
    
    return (
        <React.Fragment>
            <div className="roboto-bold text-4xl mx-10 mt-6">CÁC BÀI VIẾT NÊN ĐỌC</div>
            <ul className="mx-10 my-10 flex flex-row lora-regular text-sm lg:text-lg text-bold relative">
              <li className="text-[#D4A373]">Tất cả</li>
              <li className="ml-5">Địa phương</li>
              <li className="ml-5">Nghệ thuật</li>
              <li className="ml-5">Lễ hội và sự kiện</li>
              <li className="ml-5">Môi trường</li>
              <li className="ml-5">Cuộc sống số</li>
              <span className="absolute right-5">Xem tất cả</span>
            </ul>
            {/* <div class="inline-flex items-center justify-center w-full"> */}
              {/* <hr class="w-1/2 h-1 my-8 bg-[#068096] border-0 rounded dark:bg-gray-700" /> */}
              {/* <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">or</span> */}
            {/* </div> */}
      
            <div className="mt-10 flex items-center justify-center max-w-screen-lg mx-auto relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"> 
                {
                  posts.map((post, postIndex) => (
                    <BlogPost postInfo={post} key={postIndex}/>)) 
                }
              </div>
              <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-4xl text-[#1AA1D5] cursor-pointer">
                <FaAngleRight/>
            </div>

            </div>
            
        </React.Fragment>
    );
}

export default HighlightedSection;