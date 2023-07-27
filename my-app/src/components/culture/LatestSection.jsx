import React from 'react';
// import { useState, useEffect } from 'react';
import BlogPost from './BlogPost';
import PaginationBar from './PaginationBar';

const LatestSection = () => {

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
        {
            url: "http://localhost:3000/assets/culture_blog_03.jpg",
            title: `Triển lãm "Không gian Di sản Văn hóa Việt Nam"`,
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
            <div className="font-roboto font-bold text-4xl text-center mt-20">BÀI ĐĂNG MỚI NHẤT</div>
            <div className="font-roboto font-light text-lg text-center mt-2">Khám phá những cảm hứng văn hóa sâu sắc đến từ những lễ hội độc đáo và truyền thống văn hóa đậm chất Việt Nam</div>
            {/* <div class="inline-flex items-center justify-center w-full">
              <hr class="w-1/2 h-1 my-8 bg-[#068096] border-0 rounded dark:bg-gray-700" />
              {/* <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">or</span> */}
            {/* </div> */}
            <div className="mt-10 flex items-center justify-center max-w-screen-lg container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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