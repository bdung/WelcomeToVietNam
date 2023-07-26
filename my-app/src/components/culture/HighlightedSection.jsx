import React from 'react';
import BlogPost from './BlogPost';

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

      ];
    
    return (
        <React.Fragment>
            <div className="roboto-bold text-4xl text-center mt-6">BÀI ĐĂNG NỔI BẬT</div>
            <div className="mt-10 flex flex-row justify-center">
                <BlogPost postInfo={posts[0]}></BlogPost>
                <BlogPost postInfo={posts[1]}></BlogPost>
                <BlogPost postInfo={posts[2]}></BlogPost>
            </div>
            
        </React.Fragment>
    );
}

export default HighlightedSection;