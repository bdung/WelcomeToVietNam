import React, { useState } from 'react';
import { IoMdSend } from "react-icons/io";
import AVATAR1 from "../../assets/images/avatar1.jpg";

const CommentForm = ({ btnLabel, formSubmitHandler }) => {

    const [value, setValue] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        formSubmitHandler(value);
        setValue("");
    };

    return (
        <React.Fragment>    
            <div className="flex flex-row relative">
                <div className="rounded-full w-14 h-14 aspect-square mr-5"
                    style={{ backgroundImage: `url(${AVATAR1})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
                />
                <form onSubmit={submitHandler}>
                    <div>
                        <textarea id="freeform" name="freeform"
                            rows="3" cols="200" wrap="soft"
                            placeholder='Hãy chia sẻ cảm nghĩ của bạn...'
                            className='w-full focus:outline-none mx-auto'
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </div>
                </form>
                <button className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-4xl text-[#1AA1D5] -rotate-45 cursor-pointer">
                    {btnLabel}
                </button>
            </div>

        </React.Fragment>
    )
}

export default CommentForm;