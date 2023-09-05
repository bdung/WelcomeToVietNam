import React, {useState} from 'react';
// import { useState, useEffect } from 'react';
import BlogPost from '../../components/SmallPost';
import PaginationBar from '../../components/PaginationBar';

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
            url: "https://congthuong-cdn.mastercms.vn/stores/news_dataimages/2023/082023/29/16/bcpcdnchinhphuvn-334894974524682240-2023-8-29-88-169327303566829927225320230829162124.5732700.jpg",
            title: `Việt Nam là 1 trong 15 quốc gia đáng sống nhất thế giới do du khách nước ngoài bình chọn`,
            uploadTime: "29/08/2023",
            timeForRead: "4 phút đọc",
            like: "210",
            comment: "5",
            page: 'culture'
        },
        {
            id: 5,
            url: "https://congthuong-cdn.mastercms.vn/stores/news_dataimages/2023/082023/14/14/11865151531466077887934992235338535641513410n-1658886731058181364620020230814143256.jpg",
            title: `Tháng cô hồn: Tên gọi, nguồn gốc và những điều đại kỵ`,
            uploadTime: "14/08/2023",
            timeForRead: "5 phút đọc",
            like: "423",
            comment: "35",
            page: 'culture'
        },
        {
            id: 6,
            url: "https://congthuong-cdn.mastercms.vn/stores/news_dataimages/2023/072023/18/16/in_article/chuongtrinhnghethuatdatbiet20230718160218.jpg",
            title: `Ngày 19/7/2023 sẽ diễn ra Chương trình nghệ thuật đặc biệt “Bản hùng ca bất diệt”`,
            uploadTime: "18/07/2023",
            timeForRead: "3 phút đọc",
            like: "230",
            comment: "2",
            page: 'culture'
        },
        {
            id: 7,
            url: "https://congthuong-cdn.mastercms.vn/stores/news_dataimages/2023/042023/30/22/z4307924701743-e1ee5cae41798db4da92e0f09e2cec5b20230430223402.jpg?rt=20230430223408",
            title: `Thú vị lễ giỗ tổ nghề yến ở đảo Cù Lao Chàm`,
            uploadTime: "01/05/2023",
            timeForRead: "2 phút đọc",
            like: "720",
            comment: "42",
            page: 'culture'
        },
        {
            id: 8,
            url: "https://congthuong-cdn.mastercms.vn/stores/news_dataimages/2023/042023/28/17/in_article/anh-120230428172133.jpg",
            title: `Giỗ Tổ Hùng Vương - Lễ hội Đền Hùng: Hội tụ tinh thần yêu nước, sức mạnh cội nguồn`,
            uploadTime: "29/04/2023",
            timeForRead: "5 phút đọc",
            like: "120",
            comment: "4",
            page: 'culture'
        }

    ];

    const totalPages = 10;
    const limit = 5;
    const [page, setPage] = useState(1)

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
                    <PaginationBar total={totalPages} limit={limit} current={page} onChange={(page)=>setPage(page)}/>
                </div>
            </div>


        </React.Fragment>
    );
}

export default LatestSection;