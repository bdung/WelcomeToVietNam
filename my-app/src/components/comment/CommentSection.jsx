import React from 'react';
import { IoMdSend } from "react-icons/io";
import AVATAR1 from "../../assets/images/avatar1.jpg";
import CommentContainer from './CommentContainer';

const CommentSection = () => {
    const comments = [
        {
            avatar: `url(${AVATAR1})`,
            userName: "Nguyễn Văn Tèo",
            content: "Thật hữu ích! Cảm ơn bạn ^_^",
            uploadTime: "05/04/2023",
            like: "110",
            comment: ""
        },

    ];

    return (
        <React.Fragment>

            <div class="container mx-auto text-left italic text-blue-400 font-roboto">
                24 bình luận
            </div>
            <div className="flex items-center max-w-screen-lg mx-auto relative my-5">
                <CommentContainer/>
            </div>
            {/* comments */}

        </React.Fragment>
    );
}

export default CommentSection;