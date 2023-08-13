import React from 'react';
import { IoMdSend } from "react-icons/io";
import AVATAR1 from "../../../assets/images/avatar1.jpg";

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

                <div className="rounded-full aspect-square mr-5"
                    style={{ backgroundImage: `url(${AVATAR1})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", borderRadius: "5px", height: "50px" }}
                />
                <textarea id="freeform" name="freeform" rows="2" cols="200" wrap="soft" placeholder='Hãy chia sẻ cảm nghĩ của bạn...' className='mr-20' />
                <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-4xl text-[#1AA1D5] cursor-pointer">
                    <IoMdSend />
                </div>
            </div>
            {/* comments */}

        </React.Fragment>
    );
}

export default CommentSection;