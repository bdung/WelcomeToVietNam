import React from "react";

import aboutImg from "../../assets/images/about.jpg";
const About = () => {
	const info = [
		{ text: "Địa điểm đã đi", count: "04" },
		{ text: "", count: "24" },
		{ text: "Companies Work", count: "06" },
	];
	return (
		<section id="about" className="py-10 text-white">
			<div className="text-center mt-2">
				<h3 className="text-4xl font-semibold text-cyan-600">
					Thông tin về tôi
				</h3>
				<p className="text-gray-400 my-3 text-lg">
					Một vài thông tin về tôi
				</p>
				<div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
					<div className="p-2">
						<div className="text-gray-600 my-3">
							<p className="text-justify leading-7 w-11/12 mx-auto">
								Khi đến một vùng mới ở Việt Nam, tôi thường khám
								phá các di tích lịch sử, như các ngôi đền cổ,
								các lâu đài và cung điện mang trong mình câu
								chuyện về quá khứ. Bạn yêu thích việc tìm hiểu
								về người dân địa phương và cách cuộc sống của họ
								đã ảnh hưởng đến văn hóa hiện tại. Bạn có thể
								dành nhiều thời gian để nói chuyện với người dân
								địa phương, học hỏi về lịch sử và truyền thống
								của họ.
							</p>
							<p className="text-justify leading-7 w-11/12 mx-auto">
								Không chỉ thích khám phá lịch sử và văn hóa, bạn
								cũng là người đam mê ẩm thực. Bạn thích thử nếm
								các món ăn truyền thống và địa phương, khám phá
								những món ngon độc đáo mà mỗi vùng miền mang
								lại. Bạn có thể dành nhiều thời gian tại các chợ
								địa phương, nhà hàng truyền thống và thậm chí
								tham gia các lớp học nấu ăn để học cách làm
								những món ngon đó.{" "}
							</p>
							<p className="text-justify leading-7 w-11/12 mx-auto">
								Với tinh thần khám phá và sự đam mê văn hóa cùng
								ẩm thực, bạn thực sự là một người du lịch tuyệt
								vời để khám phá vẻ đẹp đa dạng của Việt Nam, từ
								những ngóc ngách lịch sử đến hương vị độc đáo
								của mỗi miền.{" "}
							</p>
							
							<br />
							<br />
							
						</div>
					</div>
					<div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
						<div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
							<img
								src={aboutImg}
								alt=""
								className="w-full object-cover bg-cyan-600 rounded-xl"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
