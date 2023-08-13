import React from "react";
import {FaArrowDown, FaHeart, FaComment, FaTrash} from 'react-icons/fa'

const Comment = ({ commentInfo }) => {

    return (
        <React.Fragment>
            <div className="max-w-screen-lg mx-auto relative">
                <div className="flex flex-row">
                    <div className="rounded-full h-14 w-14 aspect-square mr-5"
                        style={{ backgroundImage: `url(${commentInfo.avatar})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}
                    />

                    <div className="flex flex-col">

                        <div className="p-4 bg-gray-100 rounded-lg">
                            <div className="text-md text-black leading-tight font-bold hover:underline roboto-bold text-wrap-1-line">{commentInfo.userName}</div>
                            <div className="pt-3 text-sm text-black leading-tight font-medium roboto-bold text-wrap-2-line">{commentInfo.content}</div>


                            <div className="px-2 bg-white rounded-full shadow-sm flex flex-row absolute right-1 bottom-5" style={{ fontSize: '12px' }}>
                                <FaHeart className="mt-0.5 text-[#CC3333] ml-1"></FaHeart>
                                <p className="text-black ml-1">{commentInfo.like}</p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-left gap-5">
                            <div className=" md:text-lg hover:underline" style={{ fontSize: '12px' }}> Thích </div>
                            {/* <div className=" md:text-lg hover:underline" style={{ fontSize: '12px' }}> Phản hồi </div> */}
                            <div className=" md:text-lg hover:underline" style={{ fontSize: '12px' }}> Chỉnh sửa </div>
                            <FaTrash className="mt-2 text-[#CC3333] ml-1" style={{ fontSize: '12px' }}/>
                        </div>

                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Comment;