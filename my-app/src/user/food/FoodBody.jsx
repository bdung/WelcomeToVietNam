import React from "react";
import HighlightedSection from "./HighlightedSection";
import LatestSection from "./LatestSection";

export default function FoodBody() {
    return (
        <React.Fragment>
            <section class="max-w-4x1 mx-auto">
                <div class="bg-neutral-100">
                    <div class="pl-10 py-5 pb-20">
                        {/* <h4 class="my-10 underline underline-offset-4 decoration-4 decoration-yellow-500 font-roboto font-semibold text-2xl uppercase">Bài viết nổi bật</h4>
                        <h4 class="font-roboto font-light text-md text-center">Các chủ đề ẩm thực <em class="text-red text-bold">HOT nhất</em> gần đây</h4>
                        <ul className="mx-10 my-10 lg:flex flex-row lora-regular text-base lg:text-lg text-bold relative">
                            <li className="hover:underline text-[#D4A373]">Tất cả</li>
                            <li className="hover:underline lg:ml-5">Vùng miền</li>
                            <li className="hover:underline lg:ml-5">Khoa học và Địa lý</li>
                            <li className="hover:underline lg:ml-5">Lễ hội và sự kiện</li>
                            <li className="hover:underline lg:ml-5">Food Tour</li>
                            <span className="hover:underline absolute right-5">Xem tất cả</span>
                        </ul> */}
                        <div class="px-10 pr-10">
                            <div className="font-medium text-4xl my-6 uppercase text-center">Bài viết nổi bật</div>
                            <h4 class="font-roboto font-light text-md my-5 text-center">Các chủ đề ẩm thực <em class="text-red text-bold">HOT nhất</em> gần đây</h4>

                            <ul className="text-black-800 flex">
                                <li className="font-poppins font-normal cursor-pointer text-[14px] hover:underline decoration-900 underline-offset-8 decoration-2  mr-10  " >Tất cả</li>
                                <li className="font-poppins font-normal cursor-pointer text-[14px] hover:underline decoration-900 underline-offset-8 decoration-2 mr-10 " > Vùng miền</li>
                                <li className="font-poppins font-normal cursor-pointer text-[14px] hover:underline decoration-900 underline-offset-8 decoration-2  mr-10 " > Khoa học và Địa lý</li>
                                <li className="font-poppins font-normal cursor-pointer text-[14px] hover:underline decoration-900 underline-offset-8 decoration-2  mr-10 " >Lễ hội và sự kiện</li>
                                <li className="font-poppins font-normal cursor-pointer text-[14px] hover:underline decoration-900 underline-offset-8 decoration-2  mr-10 " >Food Tour</li>
                                <span className="font-poppins font-normal cursor-pointer text-[14px] hover:underline decoration-900 underline-offset-8 decoration-2  mr-10 
                                        absolute right-5">Xem tất cả</span>
                            </ul>
                        </div>

                        <HighlightedSection />

                    </div>
                    <div class="px-20 py-5 pb-20">
                        {/* <h4 class="my-10 underline underline-offset-4 decoration-4 decoration-yellow-200 font-roboto font-semibold text-2xl uppercase">Bài viết mới nhất</h4> */}
                        <div className="font-medium text-4xl my-6 uppercase text-center">Bài viết mới nhất</div>
                        <h4 class="font-roboto font-light text-md text-center my-5">Các chủ đề ẩm thực <em class="text-red text-bold">mới nhất</em> gần đây</h4>

                        <LatestSection />

                    </div>
                </div>
            </section>

        </React.Fragment>
    );
}