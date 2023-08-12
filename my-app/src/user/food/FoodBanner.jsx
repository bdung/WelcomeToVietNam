import React from "react";
import BANNER from "../../assets/images/foodbanner.jpg";
import './style.css';

export default function FoodBanner() {
    return (
        <React.Fragment>
            <section class="max-w-4x4 mx-auto" >
                <div
                    id="food-banner"
                    className="flex pt-20 flex-col w-full h-auto items-center rounded-tr-md rounded-br-md"
                    style={{ backgroundImage: `url(${BANNER})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
                >
                    <h2
                        id="cuisine"
                        class="text-gray-100 underline-offset-[17px] decoration-4 decoration-dotted underline decoration-white text-9xl text-center font-princess text-stroke"
                    >
                        Cuisine
                    </h2>

                    <h5 class="text-gray-100 italic px-10 py-3 font-light text-sm font-poppins">
                        Khám phá nét đẹp ẩm thực Việt Nam...
                    </h5>

                    {/* <input type="search" className="my-10 font-light text-sm font-poppins h-10 mx-auto" placeholder="Nhập tên bài post muốn tìm"/> */}

                    <div className="relative inset-x-0 bottom-0 mb-20 mt-10">
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

            </section>
        </React.Fragment>
    );
}