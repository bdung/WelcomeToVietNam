import React from 'react';
import { useState } from 'react';
import { FaAngleLeft, FaAngleRight, FaCircle } from "react-icons/fa";
import "../../App.css";

const ImageSlider = ({slides}) => {
    // eslint-disable-next-line
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: "100%",
        position: "relative",
    };

    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`,
    };

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    return (
        <div style={sliderStyles}>
            <div style={slideStyles} className="brightness-50"/>
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl md:text-6xl lg:text-8xl text-bold text-white drop-shadow be-viet-nam-pro-regular">CULTURE</div>
            <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-base md:text-lg lg:text-2xl text-white drop-shadow be-viet-nam-pro-regular">Đắm chìm trong nền văn hóa độc đáo, ngắm nhìn nghệ thuật dân gian tinh tế, khám phá trang phục truyền thống rực rỡ và tìm hiểu về những lễ hội đầy màu sắc</div>
                    
            <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-6xl rounded-full bg-black/20 text-white cursor-pointer">
                <FaAngleLeft onClick={goToPrevious}/>
            </div>
            <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-6xl rounded-full bg-black/20 text-white cursor-pointer">
                <FaAngleRight onClick={goToNext}/>
            </div>
            <div className="flex flex-row absolute bottom-1 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {slides.map((slide, slideIndex) => (
                    <FaCircle className="mx-3 text-white cursor-pointer text-base lg:text-2xl" 
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}/>
                    )) }
            </div>  
            
        </div>
    )
};

export default ImageSlider;