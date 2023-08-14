import React from 'react';
import { IoMdSend } from "react-icons/io";
import Comment from "../../components/Comment"
import AVATAR from "../../assets/images/culture_blog_01.jpg";

const CommentSection = () => {
    const comments = [
        {
            avatar: "https://binhdinh.dcs.vn/documents/34037/193476/21+b%E1%BA%A3o+v%E1%BB%87.jpg?t=1676943193842&imagePreview=1",
            userName: "Nguyễn Văn A",
            content: "Việt Nam tuyệt vời quá!",
            uploadTime: "05/04/2023",
            like: "110",
            comment: ""
        },
        {
            avatar: "https://yt3.googleusercontent.com/LOqwaOY0FljJcvhj3CKG25J2o63Ca9Dikz7a6lqRp2IUDlLd_vvNRbO9BQjF9OJj4HysDsDI=s900-c-k-c0x00ffffff-no-rj",
            userName: "Nguyễn Văn Tèo",
            content: "Thật hữu ích! Cảm ơn bạn ^_^",
            uploadTime: "05/04/2023",
            like: "110",
            comment: ""
        },
        {
            avatar: "https://pbs.twimg.com/media/EpYpMlnUUAAKEgT.jpg",
            userName: "Trần Nhật Minh",
            content: "Tuyệt!",
            uploadTime: "05/04/2023",
            like: "110",
            comment: ""
        },
        {
            avatar: "https://uplink.weforum.org/uplink/sfc/servlet.shepherd/version/renditionDownload?rendition=ORIGINAL_jpg&versionId=0682o00000XqZEwAAN",
            userName: "Nguyễn Bảo Hân",
            content: "Cảm ơn chủ blog, chia sẻ rất bổ ích",
            uploadTime: "05/04/2023",
            like: "110",
            comment: ""
        },

    ];

    return (
        <React.Fragment>

            <div className="flex items-center max-w-screen-lg mx-auto relative my-5">
                <div className="rounded-full h-14 aspect-square mr-5"
                    style={{ backgroundImage: `url(${AVATAR})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
                />

                <textarea id="freeform" name="freeform" rows="2" cols="200" wrap="soft" placeholder='Hãy chia sẻ cảm nghĩ của bạn...' className='mr-20 pl-3 pt-3 rounded-xl' />
                <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-4xl text-[#1AA1D5] cursor-pointer">
                    <IoMdSend />
                </div>
            </div>
            {/* comments */}


            <div className="my-10 flex items-left max-w-screen-lg mx-auto">
                <div className="grid-flow-row gap-10 mr-10">
                    {
                        comments.map((comment, commentIndex) => (
                            <Comment commentInfo={comment} key={commentIndex} />))
                    }
                </div>

            </div>

        </React.Fragment>
    );
}

export default CommentSection;