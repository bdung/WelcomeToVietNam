import React from 'react';
import AVATAR1 from "../../assets/images/avatar1.jpg";
import { FiMessageSquare, FiEdit2, FiTrash } from 'react-icons/fi';
const Comment = ({ comment }) => {
    return (
        <React.Fragment>
            <div className="flex flex-row flex-nowrap items-start gap-x-3 bg-[#ECECEC] p-3 rounded-xl">
                <div className="rounded-full w-14 h-14 aspect-square mr-5"
                    style={{ backgroundImage: `url(${AVATAR1})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
                />
                <div className="flex-1 flex flex-col">
                    <h5 className="font-bold text-dark-hard text-xs">
                        {comment.user.name}
                    </h5>
                    <span className="text-xs text-dark-light">
                        {new Date(comment.createAt).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                            hour: "2-digit",
                        })}
                    </span>
                    <p className="font-roboto mt-[10px] text-dark-light">
                        {comment.desc}
                    </p>
                    <div className="flex items-center gap-x-3 text-dark-light font-roboto text-sm my-3">
                        <button className="flex items-center space-x-2">
                            <FiMessageSquare className="w-4 h-auto" />
                            <span>Reply</span>
                        </button>
                        <button className="flex items-center space-x-2">
                            <FiEdit2 className="w-4 h-auto" />
                            <span>Edit</span>
                        </button>
                        <button className="flex items-center space-x-2">
                            <FiTrash className="w-4 h-auto" />
                            <span>Delete</span>
                        </button>
                    </div>

                </div>

            </div>
        </React.Fragment>
    )
}

export default Comment;