import React, { useState } from 'react';
import { IoMdTrash } from "react-icons/io";

const CommentForm = ({ 
    btnLabel,
    logginedUser, 
    formSubmitHandler, 
    formCancelHandler = null, 
    initialText = "" }) => {

    const [value, setValue] = useState(initialText);

    const submitHandler = (e) => {
        e.preventDefault();
        formSubmitHandler(value);
        setValue("");
    };

    return (
        <React.Fragment>
            <div className="flex flex-row relative">
                <div className="rounded-full w-14 h-14 aspect-square mr-5"
                    style={{ backgroundImage: `url(${logginedUser.avatar})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
                />
                <form onSubmit={submitHandler}>
                    <div>
                        <textarea id="freeform" name="freeform"
                            rows="3" cols="200" wrap="soft"
                            placeholder='Để lại bình luận...'
                            className='w-full focus:outline-none mx-auto pl-[8px] pt-[2px]'
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <div>
                            {formCancelHandler && (

                                <button type="submit"
                                    className="absolute top-[50%] -translate-x-0 translate-y-[-50%] 
                                bottom-2 lg:bottom-0 right-12 lg:right-[70px] text-xl md:text-2xl lg:text-4xl text-[#1AA1D5] cursor-pointer"
                                    onClick={formCancelHandler}>
                                    <IoMdTrash />
                                </button>
                            )}
                        </div>
                        <button type="submit"
                            className="absolute top-[50%] -translate-x-0 translate-y-[-50%] 
                                    right-5 text-xl md:text-2xl lg:text-4xl text-[#1AA1D5] cursor-pointer">
                            {btnLabel}
                        </button>
                    </div>
                </form>

            </div>

        </React.Fragment>
    )
}

export default CommentForm;