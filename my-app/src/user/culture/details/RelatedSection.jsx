import React from "react";
import BlogPost from '../../../components/SmallPost';
// import { useState } from 'react';
import { FaAngleRight } from "react-icons/fa";

const RelatedSection = () => {
  const posts = [
    {
      id: 1,
      url: "http://localhost:3000/assets/culture_blog_01.jpg",
      title: "Đấu tranh bảo vệ các giá trị văn hóa truyền thống",
      uploadTime: "03/04/2023",
      timeForRead: "3 phút đọc",
      like: "1130",
      comment: "244",
      page: 'culture'
    },
    {
      id: 2,
      url: "http://localhost:3000/assets/culture_blog_02.jpg",
      title: "Bộ VHTTDL sẽ tổ chức Triển lãm Du lịch qua các miền Di sản...",
      uploadTime: "05/04/2023",
      timeForRead: "4 phút đọc",
      like: "329",
      comment: "50",
      page: 'culture'
    },
    {
      id: 3,
      url: "http://localhost:3000/assets/culture_blog_03.jpg",
      title: `Triển lãm "Không gian Di sản Văn hóa Việt Nam"`,
      uploadTime: "03/04/2023",
      timeForRead: "2 phút đọc",
      like: "420",
      comment: "13",
      page: 'culture'
    },
    {
      id: 4,
      url: "http://localhost:3000/assets/culture_blog_03.jpg",
      title: `Triển lãm "Không gian Di sản Văn hóa Việt Nam"`,
      uploadTime: "03/04/2023",
      timeForRead: "2 phút đọc",
      like: "420",
      comment: "13",
      page: 'culture'
    },

  ];

  return (
    <React.Fragment>
      <div className="related-section container mx-auto relative">
        <div className="font-roboto text-center font-bold text-2xl md:text-2xl lg:text-4xl mx-10 mt-6">BÀI VIẾT LIÊN QUAN</div>

        <div className="mt-10 flex items-center justify-center max-w-screen-lg mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {
              posts.map((post) => (
                <BlogPost postInfo={post} key={post.id} />))
            }
          </div>
        </div>
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 text-4xl text-[#1AA1D5] cursor-pointer">
          <FaAngleRight />
        </div>
      </div>

    </React.Fragment>
  );
}

export default RelatedSection;