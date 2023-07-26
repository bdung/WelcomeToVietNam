import React from "react";

export default function FoodBody() {
    return (
        <React.Fragment>
            <section class="max-w-4x1 mx-auto">
                <div class="bg-neutral-100">
                    <div class="px-10 py-5 text-end">Search</div>
                    
                    <div class="px-10 py-5 pb-20">
                        <h4 class="underline underline-offset-8 decoration-4 decoration-yellow-500 font-roboto font-semibold text-xl">Bài viết nổi bật</h4>
                        <h4 class="font-roboto font-light text-md text-center">Các chủ đề ẩm thực <em class="text-red text-bold">HOT nhất</em> gần đây</h4>

                    </div>
                    <div class="px-10 py-5 pb-20">
                        <h4 class="underline underline-offset-8 decoration-4 decoration-yellow-200 font-roboto font-semibold text-xl">Bài viết mới nhất</h4>
                        <h4 class="font-roboto font-light text-md text-center">Các chủ đề ẩm thực <em class="text-red text-bold">mới nhất</em> gần đây</h4>

                    </div>
                </div>
            </section>

        </React.Fragment>
    );
}