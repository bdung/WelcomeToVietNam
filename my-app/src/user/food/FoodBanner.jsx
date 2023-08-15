import React from "react";
import BlogPost from '../../components/BannerSmallPost';
import { FaAngleRight } from "react-icons/fa";
import BANNER from "../../assets/images/foodbanner.jpg";
import './style.css';

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
            comment: "24"
        },
        {
			id: "1",
			page: "food",
            url: "https://img.freepik.com/free-photo/high-angle-vietnamese-dish-with-mint_23-2148381198.jpg?w=360&t=st=1691328174~exp=1691328774~hmac=9e0953bc97d2f261475148b238f2b6ea77e0b40c478676b36fe956f888ab9918",
            title: `Phở của Việt Nam đáng thưởng thức ra sao?`,
            uploadTime: "03/04/2023",
            timeForRead: "2 phút đọc",
            like: "110",
            comment: "24"
        },
        {
			id: "1",
			page: "food",
            url: "https://img.freepik.com/free-photo/delicious-vietnamese-food-including-pho-ga-noodles-spring-rolls-white-wall_181624-34158.jpg?w=996&t=st=1691328169~exp=1691328769~hmac=852a451b5dfd23dc9e3f342af39a8a8431b96abd6a8eb98ddc638dc4178d0e63",
            title: "Những món ngon không nên bỏ lỡ khi đến Hà Nội!",
            uploadTime: "03/04/2023",
            timeForRead: "3 phút đọc",
            like: "10",
            comment: "2"
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
            <section class="max-w-4x4 mx-auto" >
                <div
                    id="food-banner"
                    className="columns-2 flex pt-20 px-20 flex-col w-full h-auto rounded-tr-md rounded-br-md"
                    style={{ backgroundImage: `url(${BANNER})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
                >
                    <div className="py-20 items-center justify-center">
                        <h2
                            id="cuisine"
                            class="text-gray-100 underline-offset-[17px] decoration-4 decoration-dotted underline decoration-white text-9xl font-princess text-stroke"
                        >
                            Ẩm thực
                        </h2>

                        <h5 class="text-gray-100 italic pl-10 py-3 font-light text-sm font-poppins">
                            Khám phá nét đẹp trù phú, đa sắc của ẩm thực Việt Nam...
                        </h5>

                        {/* <input type="search" className="my-10 font-light text-sm font-poppins h-10 mx-auto" placeholder="Nhập tên bài post muốn tìm"/> */}

                        <div className=" pl-10 relative inset-x-0 bottom-0 mt-10 mb-20">
                            <span class="absolute inset-y-0 left-10 flex items-center pl-2">
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
                                        color="#1AA1D5"
                                    >
                                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </button>
                            </span>
                            <input
                                type="search"
                                name="q"
                                class="py-2 text-sm bg-gray-100 pl-10 focus:bg-white focus:text-gray-900 w-80 p-2 rounded-full focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Tìm kiếm bài viết..."
                                autocomplete="off"
                            />
                        </div>
                    </div>

                    <div className="mt-10 ml-60 my-20 flex max-w-screen-sm absolute right-0">
                        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-10 mr-10">
                            {
                                posts.map((post, postIndex) => (
                                    <BlogPost postInfo={post} key={postIndex} />))
                            }
                        </div>
                        <div className="absolute top-[50%] -translate-x-[-50%] translate-y-[-50%] right-5 text-4xl text-[#1AA1D5] cursor-pointer">
                            <FaAngleRight />
                        </div>

                    </div>

                </div>

            </section>
        </React.Fragment>
    );
}