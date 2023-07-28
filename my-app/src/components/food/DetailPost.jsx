import React from "react";
import { FaHeart, FaShare } from 'react-icons/fa'
import { BsBookmark } from 'react-icons/bs'
import FOOD1 from "./food1.jpg";
import FOOD2 from "./food2.jpg";
import FOOD3 from "./food3.jpg";

export default function FoodBody() {
    return (
        <React.Fragment>
            <section class="max-w-4x1 mx-auto py-10">
                <div class="bg-white rounded-lg mx-20 py-10 border-dashed border-2 border-cyan-300 relative">
                    <div class="absolute right-10">
                        <BsBookmark class="text-sm text-right" />
                    </div>

                    <div id="title" class="px-10 py-5 pb-20 text-center">
                        <h1 class="font-roboto font-semibold text-2xl">Văn hóa ẩm thực của Việt Nam đa dạng như thế nào?</h1>
                    </div>

                    <div id="top" class="columns-2">
                        <div id="interactive-menu" class="px-10">
                            <p class="my-3 font-roboto font-light">
                                <FaHeart class="text-sm text-red-700" />
                                110
                            </p>

                            <p class="my-3 font-roboto font-light">
                                <FaShare class="text-sm text-cyan-600" />
                                10
                            </p>

                        </div>

                        <div id="general-info" class="text-end px-10">
                            <p class="my-5 font-roboto font-light italic">
                                Ngày đăng 03/04/2023
                            </p>
                            <p class="my-5 font-roboto font-light italic">
                                3 phút đọc
                            </p>

                        </div>
                    </div>

                    <div id="body" class="py-10 pl-10 pr-5">
                        <div id="body1" class="grid grid-col-2 gap-4">
                            <div
                                id="content" 
                                class="my-5 font-roboto text-lg">
                                Văn hóa ẩm thực Việt Nam là một phần quan trọng và đặc sắc trong văn hóa dân tộc, mang trong mình sự đa dạng và phong phú. Với nền ẩm thực đa vùng miền và ảnh hưởng của các nền văn hóa lân cận, ẩm thực Việt Nam không chỉ làm say lòng người dân trong nước mà còn thu hút sự quan tâm và yêu thích của du khách quốc tế.
                            </div>
                            <div
                                id="food"
                                className="aspect-video"
                                style={{ backgroundImage: `url(${FOOD1})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", borderRadius: "5px"}}
                            />

                        </div>

                        <div id="body2" class="my-5 font-roboto text-lg italic text-center">
                            Mỗi vùng miền của Việt Nam có những món ăn đặc trưng riêng, phản ánh đặc điểm địa lý, khí hậu và nguồn tài nguyên tự nhiên của địa phương. 
                        </div>

                        <div id="body3" class="columns-2 py-5">
                            <div
                                id="food"
                                className="aspect-video"
                                style={{ backgroundImage: `url(${FOOD2})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", borderRadius: "5px"}}
                            />
                            <div
                                id="food"
                                className="aspect-video"
                                style={{ backgroundImage: `url(${FOOD3})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", borderRadius: "5px"}}
                            />

                            {/* <image src={FOOD2} alt="" class="object-fill aspect-video rounded-tr-md rounded-br-md"/>
                            <image src={FOOD3} alt="" class="object-fill aspect-video rounded-tr-md rounded-br-md"/> */}

                        </div>
                    </div>

                    <div class="flex flex-col divide-y-8 divide-double divide-yellow-500">
                        <h1 /><h1 />
                    </div>
                    <div class="flex flex-col divide-y-8 divide-double divide-yellow-200">
                        <h1 /><h1 />
                    </div>

                    <div id="comment" class="">
                        <p class="italic text-blue-400 px-10 py-3 font-roboto">
                            24 bình luận
                        </p>
                    </div>

                </div>
            </section>

        </React.Fragment>
    );
}