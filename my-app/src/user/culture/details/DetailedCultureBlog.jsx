import React from "react";
import ThumbnailSection from "./ThumbnailSection"
import MainContent from "./MainContent";
import RelatedSection from "./RelatedSection";
import CommentSection from "./CommentSection";
import { useParams } from "react-router-dom";

const CultureDetail = ({ postInfo }) => {

    const { blogId } = useParams();
    return (

        <React.Fragment>
            <div className="z-1 max-w-full h-[39.5rem] w-full m-auto relative group">
                <ThumbnailSection />
            </div>
            <section className="mx-auto">
                <div className="bg-neutral-100">
                    <MainContent />
                    <div className="mt-10 mx-10 comment">
                        <CommentSection/>
                    </div>

                    <div className="px-10 py-5 pb-20">
                        <RelatedSection />
                    </div>
                </div>
            </section>

        </React.Fragment>
    )

}

export default CultureDetail;