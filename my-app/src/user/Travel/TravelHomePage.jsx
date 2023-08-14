import React from "react";
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

export default function TravelHomePage() {
  const lastestPost = [
    {
      url: SonDooongImg,
      title: "Thiên đường bí ẩn trong lòng đất - Sơn Đoòng Việt Nam",
      uploadTime: "03/04/2023",
      timeForRead: "3 phút đọc",
      like: "1130",
      comment: "244",
    },
    {
      url: NhaThoImg,
      title: "Nhà thờ Đức Bà - Biểu tượng kiến trúc của Sài Gòn",
      uploadTime: "05/04/2023",
      timeForRead: "4 phút đọc",
      like: "329",
      comment: "50",
    },
    {
      url: HoiAnImg,
      title: "Hội An - Nơi giao thoa văn hóa và nét đẹp kiến trúc...",
      uploadTime: "03/04/2023",
      timeForRead: "2 phút đọc",
      like: "420",
      comment: "13",
    },
    {
      url: NhaTrangImg,
      title: "Nha Trang - Nơi lý tưởng cho người yêu biển và du lịch ",
      uploadTime: "03/04/2023",
      timeForRead: "2 phút đọc",
      like: "420",
      comment: "13",
    },
    {
      url: HaLongImg,
      title: "Vịnh Hạ Long - Nơi gặp gỡ giữa trời đất và biển cả",
      uploadTime: "03/04/2023",
      timeForRead: "2 phút đọc",
      like: "420",
      comment: "13",
    },
    {
      url: HoGuomImg,
      title: "Hồ Gươm - Điểm đến không thể bỏ qua khi đến Hà Nội",
      uploadTime: "03/04/2023",
      timeForRead: "2 phút đọc",
      like: "420",
      comment: "13",
    },
  ];

  const postsTravel = [
    {
      url: "https://as2.ftcdn.net/v2/jpg/02/84/81/79/1000_F_284817904_ox8667zRGi9LQl4ocAGlNoV7kkqImkuQ.jpg",
      title: "Ruộng bậc thang Hà Giang - nét đẹp miền núi...",
      uploadTime: "03/04/2023",
      timeForRead: "3 phút đọc",
      like: "10",
      comment: "2",
    },
    {
      url: "https://img.freepik.com/free-photo/peak-bamboo-lijiang-rural-mist_1417-410.jpg?w=996&t=st=1691327697~exp=1691328297~hmac=0a5a31b3d1dc6a46ab5eda0a2c867821df306e7c112c90a950c178a555fe8599",
      title: "Vịnh Hạ Long, một nơi không thể không đến!",
      uploadTime: "05/04/2023",
      timeForRead: "4 phút đọc",
      like: "329",
      comment: "50",
    },
    {
      url: "https://img.freepik.com/free-photo/vacation-stone-vietnam-fresh-green-china_1417-1360.jpg?w=996&t=st=1691327741~exp=1691328341~hmac=768bfbc260f7112eb463fa1836647c5a49fb7184ebcb6ba65f754c3aa62d15ec",
      title: `Khám phá những con thác hùng vĩ của Việt Nam `,
      uploadTime: "03/04/2023",
      timeForRead: "2 phút đọc",
      like: "110",
      comment: "24",
    },
    {
      url: HoGuomImg,
      title: "Hồ Gươm - Điểm đến không thể bỏ qua khi đến Hà Nội",
      uploadTime: "03/04/2023",
      timeForRead: "2 phút đọc",
      like: "420",
      comment: "13",
    },
    {
      url: NhaThoImg,
      title: "Nhà thờ Đức Bà - Biểu tượng kiến trúc của Sài Gòn",
      uploadTime: "05/04/2023",
      timeForRead: "4 phút đọc",
      like: "329",
      comment: "50",
    },
  ];
  const postsHighlight = [
    {
      url: SonDooongImg,
      title: "Thiên đường bí ẩn trong lòng đất - Sơn Đoòng Việt Nam",
      uploadTime: "03/04/2023",
      timeForRead: "3 phút đọc",
      like: "1130",
      comment: "244",
    },
    {
      url: HoGuomImg,
      title: "Hồ Gươm - Điểm đến không thể bỏ qua khi đến Hà Nội",
      uploadTime: "03/04/2023",
      timeForRead: "2 phút đọc",
      like: "420",
      comment: "13",
    },
    {
      url: NhaThoImg,
      title: "Nhà thờ Đức Bà - Biểu tượng kiến trúc của Sài Gòn",
      uploadTime: "05/04/2023",
      timeForRead: "4 phút đọc",
      like: "329",
      comment: "50",
    },
    {
      url: HaLongImg,
      title: "Vịnh Hạ Long - Nơi gặp gỡ giữa trời đất và biển cả",
      uploadTime: "03/04/2023",
      timeForRead: "2 phút đọc",
      like: "420",
      comment: "13",
    },
  ];

  return (
    <React.Fragment>
      <div className="relative">
        <img
          className="w-full h-auto brightness-50"
          src={LandingImg}
          alt="Background"
        />

        <div className="absolute inset-0 flex flex-col text-white font-poppins ml-10 mt-40">
          <div className="font-bold text-4xl ml-6 ">
            <div className="ml-20 pl-10">Đến Việt Nam</div>
            <div>Đến với thiên đường du lịch</div>
          </div>
          <div className="flex font-light text-sm font-poppins ml-9 p-5 text-center">
            <div className="ml-10 w-80">
              <div>
                Bạn chẳng cần đi du lịch đâu xa cho tốn kém, bạn chỉ cần đi hết
                đất nước Việt Nam
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0  mb-60 ml-20">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                class="p-1 focus:outline-none focus:shadow-outline"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="w-6 h-6"
                  color="white"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="q"
              class="py-2 text-sm text-white bg-gray-900 pl-10 focus:outline-none focus:bg-white focus:text-gray-900 w-80 p-2 rounded-full border-2 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Tìm kiếm bài viết..."
              autocomplete="off"
            />
          </div>
        </div>

        {/* <div className="absolute top-0 right-0 w-1/2 flex flex-col justify-between">
          <Coverflow
            displayQuantityOfSide={2}
            navigation={true}
            infiniteScroll={true}
            enableScroll
            media={{
              "@media (max-width: 600px)": {
                width: "600px",
                height: "500px",
              },
              "@media (min-width: 600px)": {
                width: "600px",
                height: "600px",
              },
            }}
          >
            {postsTravel.map((post, index) => (
              <div key={index}>
                <BannerSmallPost postInfo={post} />
              </div>
            ))}
          </Coverflow>
        </div> */}
      </div>

      <div className="pl-10 ">
        <div className="font-medium text-4xl mb-6 mt-20">
          CÁC BÀI VIẾT NÊN ĐỌC
        </div>
        <ul className="text-black-800 flex">
          <li className="font-poppins font-normal cursor-pointer text-[14px] hover:underline decoration-900 underline-offset-8 decoration-2  mr-10  ">
            Tất cả
          </li>
          <li className="font-poppins font-normal cursor-pointer text-[14px] hover:underline decoration-900 underline-offset-8 decoration-2 mr-10 ">
            {" "}
            Phiêu lưu
          </li>
          <li className="font-poppins font-normal cursor-pointer text-[14px] hover:underline decoration-900 underline-offset-8 decoration-2  mr-10 ">
            Du lịch
          </li>
          <li className="font-poppins font-normal cursor-pointer text-[14px] hover:underline decoration-900 underline-offset-8 decoration-2  mr-10 ">
            Thiên nhiên
          </li>
          <li className="font-poppins font-normal cursor-pointer text-[14px] hover:underline decoration-900 underline-offset-8 decoration-2  mr-10 ">
            Hiện đại
          </li>
          <div className="ml-auto">
            <span className="font-poppins font-normal cursor-pointer text-[14px] hover:underline decoration-900 underline-offset-8 decoration-2 mr-10">
              Xem tất cả 
            </span>
          </div>
        </ul>
      </div>

      <div className="pl-2 mt-10 flex items-center justify-center max-w-screen-lg mx-auto relative mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mr-10">
          {postsHighlight.map((post, postIndex) => (
            <SmallPost postInfo={post} key={postIndex} />
          ))}
        </div>
        <div className=" absolute right-1 text-4xl text-[#1AA1D5] cursor-pointer">
          <FaAngleRight />
        </div>
      </div>

      <div className="mt-40 pl-10 text-center justify-center">
        <div className="font-medium  mt-10">
          <div className="text-4xl">CÁC BÀI VIẾT MỚI NHẤT</div>
          <div className="text-lg font-light">
            Hành trình chinh phục vẻ đẹp kì diệu của thiên nhiên Việt Nam
          </div>
        </div>
      </div>

      <div className="flex justify-around items-center font-poppins mb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-7/12 pt-10 ">
          {lastestPost.map((post, postIndex) => (
            <SmallPost postInfo={post} key={postIndex} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
