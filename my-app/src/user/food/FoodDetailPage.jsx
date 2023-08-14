import React, {useState} from "react";
import FoodDetailBody from "./FoodDetailBody"
import { BsBookmark, BsBookmarkHeartFill } from 'react-icons/bs'

const THUMBNAIL = "https://www.agoda.com/wp-content/uploads/2020/05/Feature-photo-Pho-Ho-Chi-Minh-food-Vietnam.jpg"

export default function FoodDetailPage() {
    const thumbnailStyles = {
        height: "100%",
        position: "relative",
    };

    const thumbnailImageStyles = {
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${THUMBNAIL})`,
    };

    const [isActive, setIsActive] = useState(false);

    return (
        <React.Fragment>
            <div className="z-1 max-w-full h-[39.5rem] w-full m-auto relative group">
                <div style={thumbnailStyles} className="thumbnail">
                    <div style={thumbnailImageStyles} className="thumbnail-image brightness-50">
                        {/* <img src={THUMBNAIL} alt="This is a magnificent thumbnail"></img> */}
                    </div>
                    <div class="z-10 absolute right-5 bottom-5">
                        <div onClick={() => setIsActive(!isActive)}>
                            {isActive ? <BsBookmarkHeartFill class="text-5xl md:text-5xl lg:text-6xl text-white cursor-pointer"/> : <BsBookmark class="text-5xl md:text-5xl lg:text-6xl text-white cursor-pointer" />}
                        </div>
                        {/* <BsBookmark class="text-5xl md:text-5xl lg:text-6xl text-white cursor-pointer" /> */}
                    </div>
                    <div className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            text-5xl md:text-5xl lg:text-6xl text-bold text-white
            drop-shadow be-viet-nam-pro-regular">Ẩm thực Việt Nam đa dạng như thế nào?</div>
                </div>
            </div>
            <FoodDetailBody />
        </React.Fragment>
    );
}