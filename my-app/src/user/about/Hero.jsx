import React from "react";
import hero from "../../assets/images/about.jpg";
import { BiLogoFacebook, BiLogoTiktok, BiLogoYoutube } from "react-icons/bi";
const Hero = () => {
	const social_media = [BiLogoFacebook, BiLogoTiktok, BiLogoYoutube];
	return (
		<section
			id="home"
			className="min-h-screen flex py-10 md:flex-row flex-col items-center"
		>
			<div className="flex-1 flex items-center justify-center h-full">
				<img
					src={hero}
					alt=""
					className="md:w-6/12 h-full object-cover"
				/>
			</div>
			<div className="flex-1">
				<div className="md:text-left text-center">
					<h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-cyan-600  font-bold">
						<span className="text-cyan-600 md:text-6xl text-5xl">
							Xin chào!
							<br />
						</span>
						Tôi là <span>Nhóm 14</span>
					</h1>
					<h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
						Kẻ lữ hành
					</h4>
				</div>
			</div>
		</section>
	);
};

export default Hero;
