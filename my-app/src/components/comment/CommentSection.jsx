import React from 'react';
import CommentContainer from './CommentContainer';

const CommentSection = () => {

    const currentUser = {
        userId: "a",
        avatar:  "http://localhost:3000/assets/culture_blog_01.jpg"
    }


    return (
        <React.Fragment>

            <div class="container mx-auto text-left italic text-blue-400 font-roboto">
                24 bình luận
            </div>
            <div className="flex items-center max-w-screen-lg mx-auto relative my-5">
                <CommentContainer logginedUser={currentUser}/>
            </div>
            {/* comments */}

        </React.Fragment>
    );
}

export default CommentSection;