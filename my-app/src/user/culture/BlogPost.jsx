//Terminated, use "SmallPost.jsx" instead

// import React from 'react';
// import {FaArrowRight, FaHeart, FaComment} from 'react-icons/fa'

// const BlogPost = ({postInfo}) => {

//     return (
//         <React.Fragment>
//             <div className="max-w-[240px] mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl relative">
//                 <div className="md:flex flex-col">
//                     <div className="md:shrink-0 ">
//                         <img className="h-48 w-full object-cover md:h-full md:w-48" src={postInfo.url} alt={postInfo.title}/>
//                     </div>
//                     <div className="p-5">
//                         <div className="flex flex-row justify-between">
//                             <div className="text-xs md:text-lg text-slate-400 italic"> Ngày đăng {postInfo.uploadTime}</div>
//                             <div className="text-xs md:text-lg text-slate-400 italic">{postInfo.timeForRead}</div>
//                         </div>
//                         <div className="mt-1 text-2xl leading-tight font-medium text-black hover:underline text-ellipsis overflow-hidden roboto-bold text-wrap-2-line">{postInfo.title}</div>
//                         <div className="mt-5 flex flex-row justify-between align-middle">
//                             <div className="flex flex-row text-sm">
//                                 <FaHeart className="mt-0.5 text-[#CC3333] ml-1"></FaHeart>
//                                 <p className="text-slate-500 ml-1">{postInfo.like}</p>
//                                 <FaComment className="mt-0.5 ml-2"></FaComment>
//                                 <p className="text-slate-500 ml-1">{postInfo.comment}</p>
//                             </div>
//                             <div className="flex flex-row">
//                                 <p className="text-slate-500 text-sm hover:text-slate-800">Xem thêm</p>
//                                 <FaArrowRight className="ml-1 mt-0.5 text-lg text-[#1AA1D5]"></FaArrowRight>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </React.Fragment>
//     );
// }

// export default BlogPost;