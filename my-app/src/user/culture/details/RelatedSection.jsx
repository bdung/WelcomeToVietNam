import React from "react";
import BlogPost from '../../../components/SmallPost';
// import { useState } from 'react';
import { FaAngleRight } from "react-icons/fa";

const RelatedSection = () => {
  const posts = [
    {
      id: 9,
      url: "https://file3.qdnd.vn/data/images/0/2023/08/30/nguyenchihoa/201216-unnamedok_large.jpg?dpi=150&quality=100&w=870",
      title: `Nhận diện và đấu tranh với các thủ đoạn chống phá trên không gian mạng`,
      uploadTime: "03/09/2023",
      timeForRead: "4 phút đọc",
      like: "810",
      comment: "23",
      page: 'culture'
  },
  {
      id: 10,
      url: "https://file3.qdnd.vn/data/images/0/2022/12/05/thuthuytv/1%202.jpg",
      title: `Nhận diện và phòng ngừa các thủ đoạn lợi dụng tôn giáo chống phá Việt Nam hiện nay`,
      uploadTime: "05/12/2022",
      timeForRead: "3 phút đọc",
      like: "620",
      comment: "12",
      page: 'culture'
  },
  {
      id: 11,
      url: "https://file3.qdnd.vn/data/images/0/2022/10/02/vuhuyen/dang%201.jpg",
      title: `Phê phán những luận điệu phủ nhận con đường đi lên chủ nghĩa xã hội ở Việt Nam`,
      uploadTime: "03/10/2022",
      timeForRead: "8 phút đọc",
      like: "176",
      comment: "17",
      page: 'culture'
  },
  {
      id: 12,
      url: "https://file3.qdnd.vn/data/images/0/2023/08/27/nguyenthao/hoi%20nhap%20quoc%20te.jpg",
      title: `Sự phi lý của luận điệu “Không thể có độc lập, tự chủ trong hội nhập quốc tế ở Việt Nam”`,
      uploadTime: "29/04/2023",
      timeForRead: "5 phút đọc",
      like: "120",
      comment: "4",
      page: 'culture'
  }

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