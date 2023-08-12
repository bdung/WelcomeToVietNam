import React from "react";
import DetailPost from "./DetailPost"
import HighlightedSection from "./HighlightedSection";

export default function FoodBody() {
    return (
        <React.Fragment>
            <section class="max-w-4x1 mx-auto">
                <div class="bg-neutral-100">
                    <DetailPost/>

                    <div class="pl-10 py-5 pb-20">
                        {/* <h1 class="underline underline-offset-4 decoration-4 decoration-yellow-200 font-roboto font-semibold text-2xl uppercase">Bài viết tương tự</h1> */}
                        <div className="px-10 pr-10 font-medium text-4xl my-6 uppercase text-startr">Bài viết tương tự</div>
                        <HighlightedSection/>
                    </div>
                </div>
            </section>

        </React.Fragment>
    );
}