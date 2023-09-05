import React from "react";
import BlogPost from "../../components/BannerSmallPost";
import { FaAngleRight } from "react-icons/fa";
import BANNER from "../../assets/images/foodbanner.jpg";
import BannerSmallPost from "../../components/BannerSmallPost";
import "./style.css";

export default function FoodBanner() {
	const posts = [
		{
			id: "1",
			page: "food",
			url: "https://andrews.edu.vn/wp-content/uploads/am-thuc-trung-bo-mba-andrews.jpg",
			title: "Văn hóa ẩm thực của Việt Nam đa dạng như thế nào?",
			uploadTime: "03/04/2023",
			timeForRead: "3 phút đọc",
			like: "110",
			comment: "24",
		},
		{
			id: "1",
			page: "food",
			url: "https://img.freepik.com/free-photo/high-angle-vietnamese-dish-with-mint_23-2148381198.jpg?w=360&t=st=1691328174~exp=1691328774~hmac=9e0953bc97d2f261475148b238f2b6ea77e0b40c478676b36fe956f888ab9918",
			title: `Phở của Việt Nam đáng thưởng thức ra sao?`,
			uploadTime: "03/04/2023",
			timeForRead: "2 phút đọc",
			like: "110",
			comment: "24",
		},
		{
			id: "1",
			page: "food",
			url: "https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-wall_181624-34158.jpg?w=996&t=st=1691328169~exp=1691328769~hmac=852a451b5dfd23dc9e3f342af39a8a8431b96abd6a8eb98ddc638dc4178d0e63",
			title: "Những món ngon không nên bỏ lỡ khi đến Hà Nội!",
			uploadTime: "03/04/2023",
			timeForRead: "3 phút đọc",
			like: "10",
			comment: "2",
		},
		// {
		// id: "1",
		// page: "food",
		//     url: "https://img.freepik.com/free-photo/flat-lay-fresh-sandwiches-chopping-board_23-2148381180.jpg?w=360&t=st=1691328234~exp=1691328834~hmac=59018fe95a4583aa7c2c9870008a24f0d41f49b3624eb3a7fc08c542a5089487",
		//     title: "Bí mật không thể bật mí của bánh mì vỉa hè??",
		//     uploadTime: "05/04/2023",
		//     timeForRead: "4 phút đọc",
		//     like: "329",
		//     comment: "50"
		// },
	];

	return (
		<React.Fragment>
			<div className="relative flex ">
				<img
					className="w-full h-[35rem] brightness-50"
					src={BANNER}
					alt="Background"
				/>

				<div className="absolute inset-0 flex flex-col items-center w-4/12 text-white font-poppins pl-5 mt-40">
					<div className="font-bold text-3xl ml-6 ">
						<div className="text-center">Ẩm thực</div>
					</div>
					<div className="flex font-light text-sm font-poppins ml-9 p-5 text-center">
						{/* <div className=""> */}
						<div>
							Khám phá nét đẹp trù phú, đa sắc của ẩm thực Việt
							Nam...
						</div>
						{/* </div> */}
					</div>
				</div>

				<div className="absolute top-0 right-0 w-7/12 h-1/3 flex flex-col justify-between mt-20">
					{/* <div className="flex justify-around items-center font-poppins mb-40"> */}
					<div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-5 mr-10 ">
						{posts.map((post, postIndex) => (
							<BannerSmallPost postInfo={post} key={post.id} />
						))}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
