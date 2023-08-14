import React from "react";
import HighlightedSection from "./HighlightedSection";
import LatestSection from "./LatestSection";
import { FaAngleRight } from "react-icons/fa";

export default function FoodBody() {
    return (
        <React.Fragment>
            <section class="max-w-4x1 mx-auto">
                <div class="pt-7 bg-neutral-100">
                    <div class="pl-10 py-20 pt-10">
                        <div class="px-10 pr-10">
                            <div className="font-medium text-4xl mt-6 mb-2 uppercase text-center">Bài viết nổi bật</div>
                            <h4 class="font-roboto font-light text-md mb-8 text-center">Các chủ đề ẩm thực <em class="text-red text-bold">HOT nhất</em> gần đây</h4>

                            <ul className="text-black-800 flex">
                                <li className="text-[#D4A373] font-poppins font-normal cursor-pointer text-[14px] hover:underline decoration-900 underline-offset-8 decoration-2  mr-10  " >Tất cả</li>
                                <li className="font-poppins font-normal cursor-pointer text-[14px] hover:underline decoration-900 underline-offset-8 decoration-2 mr-10 " > Vùng miền</li>
                                <li className="font-poppins font-normal cursor-pointer text-[14px] hover:underline decoration-900 underline-offset-8 decoration-2  mr-10 " > Khoa học và Địa lý</li>
                                <li className="font-poppins font-normal cursor-pointer text-[14px] hover:underline decoration-900 underline-offset-8 decoration-2  mr-10 " >Lễ hội và sự kiện</li>
                                <li className="font-poppins font-normal cursor-pointer text-[14px] hover:underline decoration-900 underline-offset-8 decoration-2  mr-10 " >Food Tour</li>
                                <span className="font-poppins font-normal cursor-pointer text-[14px] hover:underline decoration-900 underline-offset-8 decoration-2  mr-10 flex flex-row
                                        absolute right-5">Xem tất cả  
                                    <FaAngleRight className="text-[#D4A373] m-1 mb-2 text-center" style={{ fontSize: '14px' }}/>
                                </span>
                            </ul>
                        </div>

                        <HighlightedSection />

                    </div>
                    <div class="px-20 py-5 pb-20">
                        {/* <h4 class="my-10 underline underline-offset-4 decoration-4 decoration-yellow-200 font-roboto font-semibold text-2xl uppercase">Bài viết mới nhất</h4> */}
                        <div className="font-medium text-4xl mt-6 mb-2 uppercase text-center">Bài viết mới nhất</div>
                        <h4 class="font-roboto font-light text-md text-center mb-5">Các chủ đề ẩm thực <em class="text-red text-bold">mới nhất</em> gần đây</h4>

                        <LatestSection />

                    </div>
                </div>
            </section>

        </React.Fragment>
    );
}