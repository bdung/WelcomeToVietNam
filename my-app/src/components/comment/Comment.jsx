import React, { useState } from 'react';
import AVATAR1 from "../../assets/images/avatar1.jpg";
import { FiMessageSquare, FiEdit2, FiTrash, FiSend } from 'react-icons/fi';
import DeletePopupModal from './DeletePopupModal';
import CommentForm from './CommentForm';


const Comment = ({
    comment,
    logginedUserId,
    affectedComment,
    setAffectedComment,
    addComment,
    updateComment,
    deleteComment,
    replies,
    parentId = null }) => {
    const isUserLoggined = Boolean(logginedUserId);
    const isCommentBelongsToUser = logginedUserId === comment.user._id;
    const isReplying = affectedComment && affectedComment.type === 'replying' && affectedComment._id === comment._id;
    const isEditing = affectedComment && affectedComment.type === 'editing' && affectedComment._id === comment._id;
    const repliedCommentId = parentId ? parentId : comment._id;
    const replyOnUserId = comment.user._id;
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [commentToDelete, setCommentToDelete] = useState("");

    const openModal = (comment) => {
        setCommentToDelete(comment);
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setCommentToDelete("");
        setIsModalOpen(false);
      };
    
      const handleDelete = () => {
        // Perform the actual deletion logic here
        console.log("Deleting comment");
        if (commentToDelete !== "") deleteComment(comment._id);
        closeModal();
      };


    return (
        <React.Fragment>
            {isModalOpen && (
                <DeletePopupModal
                    comment={commentToDelete}
                    onClose={closeModal}
                    onDelete={handleDelete}
                />
            )}
            <div className="flex flex-row gap-x-3 bg-[#ECECEC] p-3 rounded-xl">
                <div className="rounded-full w-14 h-14 aspect-square mr-5"
                    style={{ backgroundImage: `url(${AVATAR1})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
                />
                <div className="flex-1 flex flex-col text-start">
                    <h5 className="font-bold text-dark-hard text-xs">
                        {comment.user.name}
                    </h5>
                    <span className="text-xs text-dark-light">
                        {new Date(comment.createdAt).toLocaleDateString("vi-VN", {
                            weekday: "short",
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                        })}
                    </span>
                    {!isEditing && (
                        <p className="font-roboto mt-[10px] text-dark-light">
                            {comment.desc}
                        </p>
                    )}

                    {isEditing && (
                        <CommentForm btnLabel={<FiSend />}
                            formSubmitHandler={(value) => updateComment(value, comment._id)}
                            formCancelHandler={() => setAffectedComment(null)}
                            initialText={comment.desc}>

                        </CommentForm>
                    )}
                    <div className="flex items-center gap-x-3 text-dark-light font-roboto text-sm my-3">
                        {isUserLoggined && (
                            <button className="flex items-center space-x-2"
                                type="submit"
                                onClick={() => setAffectedComment({ type: 'replying', _id: comment._id })}>
                                <FiMessageSquare className="w-4 h-auto" />
                                <span>Reply</span>
                            </button>
                        )}
                        {isCommentBelongsToUser && (
                            <>
                                <button className="flex items-center space-x-2"
                                    type="submit"
                                    onClick={() => setAffectedComment({ type: 'editing', _id: comment._id })}>
                                    <FiEdit2 className="w-4 h-auto" />
                                    <span>Edit</span>
                                </button>
                                <button className="flex items-center space-x-2"
                                    type="submit"
                                    onClick={(comment) => {openModal(comment)}}>
                                    <FiTrash className="w-4 h-auto" />
                                    <span>Delete</span>
                                </button>
                            </>
                        )}
                    </div>
                    {isReplying && (
                        <CommentForm btnLabel={<FiSend />}
                            formSubmitHandler={(value) => addComment(value, repliedCommentId, replyOnUserId)}
                            formCancelHandler={() => setAffectedComment(null)} />
                    )}
                    {replies.length > 0 && (
                        <div>
                            {replies.map((reply) => (
                                <Comment key={reply._id}
                                    addComment={addComment}
                                    comment={reply}
                                    deleteComment={deleteComment}
                                    updateComment={updateComment}
                                    affectedComment={affectedComment}
                                    setAffectedComment={setAffectedComment}
                                    logginedUserId={logginedUserId}
                                    parentId={comment._id}
                                    replies={[]} />
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </React.Fragment>
    )
}

export default Comment;