import React from "react";
import BlogPost from "../../components/SmallPost";
import { FaAngleRight } from "react-icons/fa";

const HighlightedSection = () => {
	const posts = [
		{
			id: 1,
			url: "http://localhost:3000/assets/culture_blog_01.jpg",
			title: "Đấu tranh bảo vệ các giá trị văn hóa truyền thống",
			uploadTime: "03/04/2023",
			timeForRead: "3 phút đọc",
			like: "1130",
			comment: "244",
			page: "culture",
		},
		{
			id: 2,
			url: "http://localhost:3000/assets/culture_blog_02.jpg",
			title: "Bộ VHTTDL sẽ tổ chức Triển lãm Du lịch qua các miền Di sản...",
			uploadTime: "05/04/2023",
			timeForRead: "4 phút đọc",
			like: "329",
			comment: "50",
			page: "culture",
		},
		{
			id: 3,
			url: "http://localhost:3000/assets/culture_blog_03.jpg",
			title: `Triển lãm "Không gian Di sản Văn hóa Việt Nam"`,
			uploadTime: "03/04/2023",
			timeForRead: "2 phút đọc",
			like: "420",
			comment: "13",
			page: "culture",
		},
		{
			id: 4,
			url: "https://accgroup.vn/wp-content/uploads/2023/02/van-hoa-la-gi-dac-trung-chuc-nang-co-cau-va-vai-tro-cua-van-hoa.png.webp",
			title: `Bản chất của văn hóa là gì? Chúng ta nên tìm hiểu về văn hóa dân tộc"`,
			uploadTime: "03/09/2023",
			timeForRead: "2 phút đọc",
			like: "242",
			comment: "23",
			page: "culture",
		},
	];

	return (
		<React.Fragment>
			<div className="font-roboto text-center font-bold text-4xl mx-20 mt-20">
				CÁC BÀI VIẾT NÊN ĐỌC
			</div>
			<ul className="mx-20 my-10 mt-5 lg:flex flex-row font-poppins text-base font-normal lg:text-[18px] text-bold text-center justify-center relative">
				<li className="hover:underline text-[#D4A373]">Tất cả</li>
				<li className="hover:underline lg:ml-5">Địa phương</li>
				<li className="hover:underline lg:ml-5">Nghệ thuật</li>
				<li className="hover:underline lg:ml-5">Lễ hội và sự kiện</li>
				<li className="hover:underline lg:ml-5">Môi trường</li>
				<li className="hover:underline lg:ml-5">Cuộc sống số</li>
				{/* <span className="hover:underline lg:absolute lg:right-5">Xem tất cả</span>   */}
			</ul>
			{/* <div class="inline-flex items-center justify-center w-full"> */}
			{/* <hr class="w-1/2 h-1 my-8 bg-[#068096] border-0 rounded dark:bg-gray-700" /> */}
			{/* <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">or</span> */}
			{/* </div> */}

			<div className="mt-10 flex items-center justify-center max-w-screen-lg mx-auto relative">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
					{posts.map((post) => (
						<BlogPost postInfo={post} key={post.id} />
					))}
				</div>
				<div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-4xl text-[#1AA1D5] cursor-pointer">
					<FaAngleRight />
				</div>
			</div>
		</React.Fragment>
	);
};

export default HighlightedSection;
