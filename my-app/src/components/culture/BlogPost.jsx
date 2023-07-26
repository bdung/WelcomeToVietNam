import React from 'react';
import {FaArrowRight, FaHeart, FaComment} from 'react-icons/fa'

const BlogPost = ({postInfo}) => {
    return (
        <React.Fragment>
            <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl relative">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <img className="h-48 w-full object-cover md:h-full md:w-48" src={postInfo.url} alt="Modern building architecture"/>
                    </div>
                    <div className="p-8">
                        <div className="flex flex-row justify-between">
                            <div className="italic"> Ngày đăng {postInfo.uploadTime}</div>
                            <div className="italic">{postInfo.timeForRead}</div>
                        </div>
                        <a href="#" className="block mt-1 text-2xl leading-tight font-medium text-black hover:underline text-ellipsis overflow-hidden">{postInfo.title}</a>
                        <div className="absolute bottom-3 mt-5 flex flex-row justify-start">
                            <FaHeart className="text-lg"></FaHeart>
                            <p className="text-slate-500 mx-1">{postInfo.like}</p>
                            <FaComment className="text-lg mx-2"></FaComment>
                            <p className="text-slate-500">{postInfo.comment}</p>
                            <p className="mx-2 text-slate-500">Xem thêm</p>
                            <FaArrowRight className="text-lg"></FaArrowRight>
                        </div>
                        
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default BlogPost;