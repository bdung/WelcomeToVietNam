import React from "react";
import BANNER from "./banner.jpg";
import './style.css';

export default function FoodBanner() {
    return (
        <React.Fragment>
            <section class="max-w-4x1 mx-auto" >
                <div
                    id="food-banner"
                    className="flex my-5 flex-col w-full h-auto items-center rounded-tr-md rounded-br-md"
                    style={{ backgroundImage: `url(${BANNER})`, backgroundSize: "auto" }}
                >
                    <h2
                        id="cuisine"
                        class="text-gray-100 underline-offset-[17px] decoration-4 decoration-dotted underline decoration-white text-9xl text-center font-princess text-stroke"
                    >
                        Cuisine
                    </h2>
                </div>

                <h5 class="text-end italic text-blue-400 px-10 py-3 font-roboto">
                    Khám phá nét đẹp ẩm thực Việt Nam...
                </h5>
                <div class="flex flex-col divide-y-8 divide-double divide-yellow-500">
                    <h1/><h1/>
                </div>
                <div class="flex flex-col divide-y-8 divide-double divide-yellow-200">
                    <h1/><h1/>
                </div>
            </section>
        </React.Fragment>
    );
}