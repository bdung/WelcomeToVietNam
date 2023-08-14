import React from 'react';
import BlogPost from './BlogPost';
import { FaAngleRight } from "react-icons/fa";
import FOOD1 from "../../assets/images/food1.jpg";
import FOOD4 from "../../assets/images/food4.png";
import FOOD5 from "../../assets/images/food5.jpg";
import FOOD6 from "../../assets/images/food6.jpg";

const HighlightedSection = () => {
    const posts = [
        {
          url: `url(${FOOD1})`,
          title: "Văn hóa ẩm thực của Việt Nam đa dạng như thế nào?",
          uploadTime: "03/04/2023",
          timeForRead: "3 phút đọc",
          like: "110",
          comment: "24"
        },
        {
          url: `url(${FOOD5})`,
          title: "Bún đậu mắm tôm phong cách vỉa hè gây sốt tại New York",
          uploadTime: "05/04/2023",
          timeForRead: "4 phút đọc",
          like: "329",
          comment: "50"
        },
        {
            url: `url(${FOOD4})`,
            title: `Top 10 món ăn không thể thiếu vào ngày Tết 2024`,
            uploadTime: "03/04/2023",
            timeForRead: "2 phút đọc",
            like: "420",
            comment: "13"
        },
        {
          url: `url(${FOOD6})`,
          title: `Ảnh hưởng về văn hóa và yếu tố khí hậu, địa lý của từng vùng miền...`,
          uploadTime: "03/04/2023",
          timeForRead: "2 phút đọc",
          like: "420",
          comment: "13"
        },

      ];
    
    return (
        <React.Fragment>
      
            <div className="mt-10 flex items-center justify-center max-w-screen-lg mx-auto relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mr-10"> 
                    {
                    posts.map((post, postIndex) => (
                        <BlogPost postInfo={post} key={postIndex}/>)) 
                    }
                </div>
                <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-1 text-4xl text-[#1AA1D5] cursor-pointer">
                    <FaAngleRight/>
                </div>

            </div>
            
        </React.Fragment>
    );
}

export default HighlightedSection;