import React, { useState } from "react";
import { FaArrowRight, FaHeart, FaComment } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const SmallPost = ({ postInfo }) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<React.Fragment>
			<div className="max-w-[240px]  bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl relative">
				<div className="md:flex flex-col">
					<Link to={`/${postInfo.page}/detail/${postInfo.id}`}>
						<div className="md:shrink-0 ">
							<img
								className="h-48  object-cover w-full"
								src={postInfo.url}
								alt={postInfo.title}
							/>
						</div>
					</Link>
					<div className="p-3">
						<Link to={`/${postInfo.page}/detail/${postInfo.id}`}>
							<div className="flex flex-row justify-between">
								<div
									className=" md:text-lg text-slate-400 italic "
									style={{ fontSize: "12px" }}
								>
									{" "}
									Ngày đăng {postInfo.uploadTime}
								</div>
								<div
									className=" md:text-lg text-slate-400 italic "
									style={{ fontSize: "12px" }}
								>
									{postInfo.timeForRead}
								</div>
							</div>
							<div className="mt-1 text-lg leading-tight font-medium text-black hover:underline text-ellipsis overflow-hidden roboto-bold text-wrap-2-line">
								{postInfo.title}
							</div>
						</Link>
						<div className="mt-5 flex flex-row justify-between align-middle">
							<div className="flex flex-row text-sm">
								<div onClick={() => setIsActive(!isActive)}>
									{isActive ? (
										<FaHeart className="mt-0.5 text-[#CC3333] ml-1 cursor-pointer" />
									) : (
										<AiOutlineHeart className="mt-0.5 text-black ml-1 cursor-pointer" />
									)}
								</div>
								<p className="text-slate-500 ml-1">
									{postInfo.like}
								</p>
								<FaComment className="mt-0.5 ml-2"></FaComment>
								<p className="text-slate-500 ml-1">
									{postInfo.comment}
								</p>
							</div>
							<Link
								to={`/${postInfo.page}/detail/${postInfo.id}`}
							>
								<div className="flex flex-row">
									<p className="text-slate-500 text-sm hover:text-slate-800">
										Xem thêm
									</p>
									<FaArrowRight className="ml-1 mt-0.5 text-lg text-[#1AA1D5]"></FaArrowRight>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default SmallPost;
