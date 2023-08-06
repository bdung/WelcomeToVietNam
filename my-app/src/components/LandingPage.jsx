// import React from 'react';
// // import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// // import { EffectCoverflow, Pagination, Navigation } from 'swiper';
// import  { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';

// import slide_image_1 from '../assets/images/ha_long_bay.travel.jpg';
// import slide_image_2 from '../assets/images/hoi_an.travel.jpg';
// import slide_image_3 from '../assets/images/nha_tho.travel.jpg';
// import slide_image_4 from '../assets/images/nha_trang.travel.jpg';
// import slide_image_5 from '../assets/images/son_doong.travel.jpg';
// import slide_image_6 from '../assets/images/ha_long_bay.travel.jpg';
// import slide_image_7 from '../assets/images/ha_long_bay.travel.jpg';

// function App() {
//   return (
//     <div className="container">
//       <h1 className="heading">Welcome to VN</h1>
//       <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={'auto'}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//         }}
//         pagination={{ el: '.swiper-pagination', clickable: true }}
//         navigation={{
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//           clickable: true,
//         }}
//         modules={[EffectCoverflow, Pagination, Navigation]}
//         className="swiper_container"
//       >
//         <SwiperSlide>
//           <img src={slide_image_1} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_2} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_3} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_4} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_5} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_6} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide_image_7} alt="slide_image" />
//         </SwiperSlide>

//         <div className="slider-controler">
//           <div className="swiper-button-prev slider-arrow">
//             <ion-icon name="arrow-back-outline"></ion-icon>
//           </div>
//           <div className="swiper-button-next slider-arrow">
//             <ion-icon name="arrow-forward-outline"></ion-icon>
//           </div>
//           <div className="swiper-pagination"></div>
//         </div>
//       </Swiper>
//     </div>
//   );
// }

// export default App;
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../index.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function App() {
	return (
		<>
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={"auto"}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				pagination={true}
				modules={[EffectCoverflow, Pagination]}
				className="mySwiper"
			>
				<SwiperSlide>
					<img src="https://swiperjs.com/demos/images/nature-1.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://swiperjs.com/demos/images/nature-2.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://swiperjs.com/demos/images/nature-3.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://swiperjs.com/demos/images/nature-4.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://swiperjs.com/demos/images/nature-5.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://swiperjs.com/demos/images/nature-6.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://swiperjs.com/demos/images/nature-7.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://swiperjs.com/demos/images/nature-8.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="https://swiperjs.com/demos/images/nature-9.jpg" />
				</SwiperSlide>
			</Swiper>
		</>
	);
}
