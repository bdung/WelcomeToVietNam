import React from "react";
import { FaArrowRight, FaHeart, FaComment } from "react-icons/fa";

const BannerSmallPost = ({ postInfo }) => {
  return (
    <React.Fragment>
      <div className="max-w-[240px] mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl relative">
        <div
          className="md:flex flex-col h-96"
          style={{
            backgroundImage: `url(${postInfo.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="m-2">
            <div className="p-3 bg-black bg-opacity-40 rounded-lg mt-56">
              <div className="flex flex-row justify-between ">
                <div
                  className=" md:text-lg text-white italic "
                  style={{ fontSize: "12px" }}
                >
                  {" "}
                  Ngày đăng {postInfo.uploadTime}
                </div>
                <div
                  className=" md:text-lg text-white italic "
                  style={{ fontSize: "12px" }}
                >
                  {postInfo.timeForRead}
                </div>
              </div>
              <div className="mt-1 text-lg leading-tight font-medium text-white hover:underline text-ellipsis overflow-hidden roboto-bold text-wrap-2-line">
                {postInfo.title}
              </div>
              <div className="mt-5 flex flex-row justify-between align-middle">
                <div className="flex flex-row text-sm">
                  <FaHeart className="mt-0.5 text-[#CC3333] ml-1"></FaHeart>
                  <p className="text-white ml-1">{postInfo.like}</p>
                  <FaComment className="mt-0.5 ml-2 text-white"></FaComment>
                  <p className="text-white ml-1">{postInfo.comment}</p>
                </div>
                <div className="flex flex-row">
                  <p className="text-white text-sm hover:font-bold ">
                    Xem thêm
                  </p>
                  <FaArrowRight className="ml-1 mt-0.5 text-lg text-[#1AA1D5]"></FaArrowRight>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BannerSmallPost;
