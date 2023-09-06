import React, { useState } from "react";
import LandingImg from "../../assets/images/landing.travel.png";
import SmallPost from "../../components/SmallPost";
import { FaAngleRight } from "react-icons/fa";
import SonDooongImg from "../../assets/images/son_doong.travel.jpg";
import NhaThoImg from "../../assets/images/nha_tho.travel.jpg";
import HoiAnImg from "../../assets/images/hoi_an.travel.jpg";
import NhaTrangImg from "../../assets/images/nha_trang.travel.jpg";
import HaLongImg from "../../assets/images/ha_long_bay.travel.jpg";
import HoGuomImg from "../../assets/images/ho_guom.travel.jpg";
// import Coverflow from "react-coverflow";
import BannerSmallPost from "../../components/BannerSmallPost";
import PaginationBar from "../../components/PaginationBar";
export default function TravelHomePage() {
	const lastestPost = [
		{
			id: 1,
			url: SonDooongImg,
			title: "Thiên đường bí ẩn trong lòng đất - Sơn Đoòng Việt Nam",
			uploadTime: "03/04/2023",
			timeForRead: "3 phút đọc",
			like: "1130",
			comment: "244",
			page: "travel",
		},
		{
			id: 2,
			url: NhaThoImg,
			title: "Nhà thờ Đức Bà - Biểu tượng kiến trúc của Sài Gòn",
			uploadTime: "05/04/2023",
			timeForRead: "4 phút đọc",
			like: "329",
			comment: "50",
			page: "travel",
		},
		{
			id: 3,
			url: HoiAnImg,
			title: "Hội An - Nơi giao thoa văn hóa và nét đẹp kiến trúc...",
			uploadTime: "03/04/2023",
			timeForRead: "2 phút đọc",
			like: "420",
			comment: "13",
			page: "travel",
		},
		{
			id: 4,
			url: NhaTrangImg,
			title: "Nha Trang - Nơi lý tưởng cho người yêu biển và du lịch ",
			uploadTime: "03/04/2023",
			timeForRead: "2 phút đọc",
			like: "420",
			comment: "13",
			page: "travel",
		},
		{
			id: 5,
			url: HaLongImg,
			title: "Vịnh Hạ Long - Nơi gặp gỡ giữa trời đất và biển cả",
			uploadTime: "03/04/2023",
			timeForRead: "2 phút đọc",
			like: "420",
			comment: "13",
			page: "travel",
		},
		{
			id: 6,
			url: HoGuomImg,
			title: "Hồ Gươm - Điểm đến không thể bỏ qua khi đến Hà Nội",
			uploadTime: "03/04/2023",
			timeForRead: "2 phút đọc",
			like: "420",
			comment: "13",
			page: "travel",
		},
		{
			id: 2,
			url: NhaThoImg,
			title: "Nhà thờ Đức Bà - Biểu tượng kiến trúc của Sài Gòn",
			uploadTime: "05/04/2023",
			timeForRead: "4 phút đọc",
			like: "329",
			comment: "50",
			page: "travel",
		},
		{
			id: 2,
			url: NhaThoImg,
			title: "Nhà thờ Đức Bà - Biểu tượng kiến trúc của Sài Gòn",
			uploadTime: "05/04/2023",
			timeForRead: "4 phút đọc",
			like: "329",
			comment: "50",
			page: "travel",
		},
	];

	const postsTravel = [
		{
			id: 7,
			url: "https://as2.ftcdn.net/v2/jpg/02/84/81/79/1000_F_284817904_ox8667zRGi9LQl4ocAGlNoV7kkqImkuQ.jpg",
			title: "Ruộng bậc thang Hà Giang - nét đẹp miền núi...",
			uploadTime: "03/04/2023",
			timeForRead: "3 phút đọc",
			like: "10",
			comment: "2",
			page: "travel",
		},
		{
			id: 5,
			url: "https://img.freepik.com/free-photo/peak-bamboo-lijiang-rural-mist_1417-410.jpg?w=996&t=st=1691327697~exp=1691328297~hmac=0a5a31b3d1dc6a46ab5eda0a2c867821df306e7c112c90a950c178a555fe8599",
			title: "Vịnh Hạ Long, một nơi không thể không đến!",
			uploadTime: "05/04/2023",
			timeForRead: "4 phút đọc",
			like: "329",
			comment: "50",
			page: "travel",
		},
		{
			id: 8,
			url: "https://img.freepik.com/free-photo/vacation-stone-vietnam-fresh-green-china_1417-1360.jpg?w=996&t=st=1691327741~exp=1691328341~hmac=768bfbc260f7112eb463fa1836647c5a49fb7184ebcb6ba65f754c3aa62d15ec",
			title: `Khám phá những con thác hùng vĩ của Việt Nam `,
			uploadTime: "03/04/2023",
			timeForRead: "2 phút đọc",
			like: "110",
			comment: "24",
			page: "travel",
		},
	];
	const postsHighlight = [
		{
			id: 1,
			url: SonDooongImg,
			title: "Thiên đường bí ẩn trong lòng đất - Sơn Đoòng Việt Nam",
			uploadTime: "03/04/2023",
			timeForRead: "3 phút đọc",
			like: "1130",
			comment: "244",
			page: "travel",
		},
		{
			id: 6,
			url: HoGuomImg,
			title: "Hồ Gươm - Điểm đến không thể bỏ qua khi đến Hà Nội",
			uploadTime: "03/04/2023",
			timeForRead: "2 phút đọc",
			like: "420",
			comment: "13",
			page: "travel",
		},
		{
			id: 2,
			url: NhaThoImg,
			title: "Nhà thờ Đức Bà - Biểu tượng kiến trúc của Sài Gòn",
			uploadTime: "05/04/2023",
			timeForRead: "4 phút đọc",
			like: "329",
			comment: "50",
			page: "travel",
		},
		{
			id: 5,
			url: HaLongImg,
			title: "Vịnh Hạ Long - Nơi gặp gỡ giữa trời đất và biển cả",
			uploadTime: "03/04/2023",
			timeForRead: "2 phút đọc",
			like: "420",
			comment: "13",
			page: "travel",
		},
	];
	const totalPages = 10;
	const limit = 5;
	const [page, setPage] = useState(1);
	return (
		<React.Fragment>
			<div className="relative flex">
				<img
					className="w-full brightness-50"
					src={LandingImg}
					alt="Background"
				/>

				<div className="absolute inset-0 flex flex-col items-center w-4/12 text-white font-poppins pl-5 mt-40">
					<div className="font-bold text-3xl ml-6 ">
						<div className="text-center">Đến Việt Nam</div>
						<div>Đến với thiên đường du lịch</div>
					</div>
					<div className="flex font-light text-sm font-poppins ml-9 p-5 text-center">
						{/* <div className=""> */}
						<div>
							Bạn chẳng cần đi du lịch đâu xa cho tốn kém, bạn chỉ
							cần đi hết đất nước Việt Nam
						</div>
						{/* </div> */}
					</div>
				</div>

				<div className="absolute top-0 right-0 w-7/12 h-1/3 flex flex-col justify-between mt-20">
					{/* <div className="flex justify-around items-center font-poppins mb-40"> */}
					<div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-5 mr-10 ">
						{postsTravel.map((post, postIndex) => (
							<BannerSmallPost postInfo={post} key={post.id} />
						))}
					</div>
				</div>
			</div>

			<div className="pl-10 text-center justify-center ">
				<div className="font-medium text-4xl mb-6 mt-20 ">
					CÁC BÀI VIẾT NÊN ĐỌC
				</div>
				<ul className="text-black-800 flex text-center justify-center">
					<li className="font-poppins font-normal cursor-pointer text-[18px] hover:underline decoration-900 underline-offset-8 decoration-2  mr-10  ">
						Tất cả
					</li>
					<li className="font-poppins font-normal cursor-pointer text-[18px] hover:underline decoration-900 underline-offset-8 decoration-2 mr-10 ">
						{" "}
						Phiêu lưu
					</li>
					<li className="font-poppins font-normal cursor-pointer text-[18px] hover:underline decoration-900 underline-offset-8 decoration-2  mr-10 ">
						Du lịch
					</li>
					<li className="font-poppins font-normal cursor-pointer text-[18px] hover:underline decoration-900 underline-offset-8 decoration-2  mr-10 ">
						Thiên nhiên
					</li>
					<li className="font-poppins font-normal cursor-pointer text-[18px] hover:underline decoration-900 underline-offset-8 decoration-2  mr-10 ">
						Hiện đại
					</li>
				</ul>
			</div>

			<div className="pl-2 mt-10 flex items-center justify-center max-w-screen-lg mx-auto relative mb-20">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mr-10">
					{postsHighlight.map((post, postIndex) => (
						<SmallPost postInfo={post} key={post.id} />
					))}
				</div>
				<div className=" absolute right-1 text-4xl text-[#1AA1D5] cursor-pointer">
					<FaAngleRight />
				</div>
			</div>

			<div className="mt-30 pl-10 text-center justify-center">
				<div className="font-medium  mt-10">
					<div className="text-4xl">CÁC BÀI VIẾT MỚI NHẤT</div>
					<div className="text-lg font-light">
						Hành trình chinh phục vẻ đẹp kì diệu của thiên nhiên
						Việt Nam
					</div>
				</div>
			</div>

			<div className="flex justify-around items-center font-poppins mb-20">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-9/12 pt-10 ">
					{lastestPost.map((post, postIndex) => (
						<SmallPost postInfo={post} key={post.id} />
					))}
				</div>
			</div>
			<div className="flex items-center justify-center max-w-screen-lg container mx-auto">
				<PaginationBar
					total={totalPages}
					limit={limit}
					current={page}
					onChange={(page) => setPage(page)}
				/>
			</div>
		</React.Fragment>
	);
}
