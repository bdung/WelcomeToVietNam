import React from "react";
import DetailPost from "./DetailPost"

export default function FoodBody() {
    return (
        <React.Fragment>
            <section class="max-w-4x1 mx-auto">
                <div class="bg-neutral-100">
                    <DetailPost/>

                    <div class="px-10 py-5 pb-20">
                        <h1 class="underline underline-offset-8 decoration-4 decoration-yellow-200 font-roboto font-semibold text-xl">Bài viết tương tự</h1>

                    </div>
                </div>
            </section>

        </React.Fragment>
    );
}