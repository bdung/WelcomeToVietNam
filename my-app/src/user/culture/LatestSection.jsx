import React from 'react';
// import { useState, useEffect } from 'react';
import BlogPost from '../../components/SmallPost';
import PaginationBar from './PaginationBar';

const LatestSection = () => {

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
        {
            id: 5,
            url: "http://localhost:3000/assets/culture_blog_03.jpg",
            title: `Triển lãm "Không gian Di sản Văn hóa Việt Nam"`,
            uploadTime: "03/04/2023",
            timeForRead: "2 phút đọc",
            like: "420",
            comment: "13",
            page: 'culture'
        },
        {
            id: 6,
            url: "http://localhost:3000/assets/culture_blog_03.jpg",
            title: `Triển lãm "Không gian Di sản Văn hóa Việt Nam"`,
            uploadTime: "03/04/2023",
            timeForRead: "2 phút đọc",
            like: "420",
            comment: "13",
            page: 'culture'
        },
        {
            id: 7,
            url: "http://localhost:3000/assets/culture_blog_03.jpg",
            title: `Triển lãm "Không gian Di sản Văn hóa Việt Nam"`,
            uploadTime: "03/04/2023",
            timeForRead: "2 phút đọc",
            like: "420",
            comment: "13",
            page: 'culture'
        },
        {
            id: 8,
            url: "http://localhost:3000/assets/culture_blog_03.jpg",
            title: `Triển lãm "Không gian Di sản Văn hóa Việt Nam"`,
            uploadTime: "03/04/2023",
            timeForRead: "2 phút đọc",
            like: "420",
            comment: "13",
            page: 'culture'
        }

    ];

    return (
        <React.Fragment>
            <div class="container mx-auto">
                <div className="font-roboto font-bold text-4xl text-center mt-20">BÀI ĐĂNG MỚI NHẤT</div>
                <div className="font-roboto font-light text-lg text-center mt-5">Khám phá những cảm hứng văn hóa sâu sắc đến từ những lễ hội độc đáo và truyền thống văn hóa đậm chất Việt Nam</div>
                <div className="mt-20 flex items-center justify-center max-w-screen-lg container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {
                            posts.map((post) => (
                                <BlogPost postInfo={post} key={post.id} />))
                        }
                    </div>
                </div>
                {/* Pagination */}
                <div className="mt-10 mb-20 flex items-center justify-center max-w-screen-lg container mx-auto">
                    <PaginationBar total={5} current={2} />
                </div>
            </div>


        </React.Fragment>
    );
}

export default LatestSection;