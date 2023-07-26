import React from "react";
// import {FaFacebookF, FaGoogle} from 'react-icons/fa'

export default function FoodBody() {
    return (
        <React.Fragment>
            <section class="max-w-4x1 mx-auto">
                <div class="bg-neutral-100">
                    <div class="px-10 py-5 text-end">Search</div>
                    <div class="px-10 py-5 pb-20">
                        <h4 class="underline underline-offset-4 decoration-4 decoration-yellow-500 pr-5">Bài viết nổi bật</h4>
                        
                    </div>
                    <div class="px-10 py-5 pb-20">
                        <h4 class="underline underline-offset-4 decoration-4 decoration-yellow-200 pr-5">Bài viết mới nhất</h4>

                    </div>
                </div>
            </section>

        </React.Fragment>
    );
}