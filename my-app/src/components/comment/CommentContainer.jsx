import React, { useState, useEffect } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
import { getCommentsData } from "../../assets/js/comments"
import { FiSend } from 'react-icons/fi';

const CommentContainer = ({ logginedUser }) => {

    const [comments, setComments] = useState([]);
    const mainComments = comments.filter(comment => comment.parent === null);
    const [affectedComment, setAffectedComment] = useState(null);

    useEffect(() => {
        (async () => {
            const commentData = await getCommentsData();
            setComments(commentData);
        })();
    }, []);
    const addCommentHandler = (value, parent = null, replyOnUser = null) => {
        const newComment = {
            _id: Math.random().toString(),
            user: {
                _id: "a",
                name: "Trần Văn A",
                avatar: "http://localhost:3000/assets/culture_blog_01.jpg"
            },
            desc: value,
            post: "1",
            parent: parent,
            replyOnUser: replyOnUser,
            createdAt: new Date().toISOString(),
            like: 0,
        }
        setComments((curState) => {
            return [newComment, ...curState];
        });
        
        setAffectedComment(null);
    }
    const updateCommentHandler = (value, commentId) => {
        const updateComments = comments.map((comment) => {
            if (comment._id === commentId) {
                return { ...comment, desc: value };
            }
            return comment;
        });
        setComments(updateComments);
        setAffectedComment(null);

    }

    const deleteCommentHandler = (commentId) => {
        const updateComments = comments.filter((comment) => {
            return comment._id !== commentId;
        });
        setComments(updateComments);
    }

    const getRepliesHandler = (commentId) => {
        return comments.filter((comment) => comment.parent === commentId)
        .sort((former, latter) => {
            return new Date(former.createdAt).getTime() - new Date(latter.createdAt).getTime();})
    }

    const likeCommentHandler = (commentId) => {
        setComments((curState) => {
            return curState.map((comment) => {
                if (comment._id === commentId) {
                    const updatedLikeStatus = !comment.like_status;
                    const updatedLikeCount = updatedLikeStatus ? comment.like + 1 : comment.like - 1;
                    return { ...comment, like: updatedLikeCount, like_status: updatedLikeStatus};
                }
                return comment;
            });
        });
    };

    return (
        <React.Fragment>
            <div>
                <div class="container mx-auto text-left italic text-blue-400 font-roboto">
                    { Object.keys(comments).length} bình luận
                </div>
                <CommentForm 
                    btnLabel={<FiSend />} 
                    formSubmitHandler={(value) => addCommentHandler(value)} 
                    logginedUser={logginedUser}/>
                <div className="space-y-4 mt-8">
                    {mainComments.map((comment) => (
                        <Comment
                            key={comment._id}
                            comment={comment}
                            logginedUser={logginedUser}
                            affectedComment={affectedComment}
                            setAffectedComment={setAffectedComment}
                            addComment={addCommentHandler}
                            updateComment={updateCommentHandler}
                            deleteComment={deleteCommentHandler}
                            likeComment={likeCommentHandler}
                            replies={getRepliesHandler(comment._id)}/>
                    ))}
                </div>
            </div>

        </React.Fragment>
    )
}

export default CommentContainer;