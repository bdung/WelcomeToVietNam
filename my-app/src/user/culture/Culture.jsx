import React from "react";
import ImageSlider from "./ImageSlider";
import MainContent from "./MainContent";

const CultureScreen = () => {

//Sẽ được truyền vào từ bên ngoài    
  const slides = [
    {
      url: "http://localhost:3000/assets/chua_kinh_thien.jpg",
      title: "Chùa Kinh Thiên",
    },
    {
      url: "http://localhost:3000/assets/pho_co_hoi_an.jpg",
      title: "Phố Cổ Hội An",
    },
    {
      url: "http://localhost:3000/assets/truong_quoc_hoc_hue.jpg",
      title: "Trường Quốc Học Huế",
    },
  ];

  return (
    <div>
      <div className="z-1 max-w-full h-[39.5rem] w-full m-auto relative group">
        <ImageSlider slides={slides} />
      </div>
      <MainContent className="bg-neutral-100"/>
    </div>
  );
};

export default CultureScreen;
