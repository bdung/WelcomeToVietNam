import React from 'react';
// import { useState, useEffect } from 'react';
import BlogPost from './BlogPost';
import PaginationBar from './PaginationBar';
import FOOD1 from "../../assets/images/food1.jpg";
import FOOD2 from "../../assets/images/food2.jpg";
import FOOD3 from "../../assets/images/food3.jpg";
import FOOD4 from "../../assets/images/food4.png";
import FOOD6 from "../../assets/images/food6.jpg";
import FOOD7 from "../../assets/images/food7.jpg";

const LatestSection = () => {

    const posts = [
        {
            url: `url(${FOOD6})`,
            title: "Ảnh hưởng về văn hóa và yếu tố khí hậu, địa lý của từng vùng miền...",
            uploadTime: "03/04/2023",
            timeForRead: "3 phút đọc",
            like: "10",
            comment: "2"
        },
        {
            url: `url(${FOOD7})`,
            title: "Bí mật không thể bật mí của bánh mì vỉa hè??",
            uploadTime: "05/04/2023",
            timeForRead: "4 phút đọc",
            like: "329",
            comment: "50"
        },
        {
            url: `url(${FOOD1})`,
            title: `Văn hóa ẩm thực của Việt Nam đa dạng như thế nào?`,
            uploadTime: "03/04/2023",
            timeForRead: "2 phút đọc",
            like: "110",
            comment: "24"
        },
        {
            url: `url(${FOOD2})`,
            title: `Phở - Món ăn Việt nổi tiếng nhất và những câu chuyện về nó`,
            uploadTime: "03/04/2023",
            timeForRead: "2 phút đọc",
            like: "420",
            comment: "13"
        },
        {
            url: `url(${FOOD4})`,
            title: `Giá trị dinh dưỡng của hải sản và lí do bạn nên ăn `,
            uploadTime: "03/04/2023",
            timeForRead: "2 phút đọc",
            like: "420",
            comment: "13"
        },
        {
            url: `url(${FOOD3})`,
            title: `Top 10 món ăn không thể thiếu vào ngày Tết 2024`,
            uploadTime: "03/04/2023",
            timeForRead: "2 phút đọc",
            like: "420",
            comment: "13"
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

    // const [data, setData] = useState({})
    // const [page, setPage] = useState(1)

    // useEffect(() => {

    //     const getAllPosts = async() => {
    //         try {
                
    //             setData({
    //                 list: data?.data,
    //                 totalPage: data?.pagination?.totalPage
    //             })
    //         } catch (error) {
                
    //         }
    //     }
    // },[]);

    
    
    return (
        <React.Fragment>

            <div className="mt-10 flex items-center justify-center max-w-screen-lg container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {
                  posts.map((post, postIndex) => (
                    <BlogPost postInfo={post} key={postIndex}/>)) 
                }
              </div>
            </div>
            {/* Pagination */}
            <div className="mt-10 flex items-center justify-center max-w-screen-lg container mx-auto">
                <PaginationBar total={5} current={2}/>
            </div>
            
            
        </React.Fragment>
    );
}

export default LatestSection;