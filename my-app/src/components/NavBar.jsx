import React from "react";
import { BiLogoFacebook, BiLogoTiktok, BiLogoYoutube } from "react-icons/bi";
import Account from "../admin/textEditor";
function Navbar() {
	const verticalLine = {
		borderLeft: "2px solid white ",
		height: "18px",
	};
	function userLogin(isLogin) {
		if (isLogin) return <a href="/login">Đăng nhập</a>;
		else return <Account />;
	}
	var isLogin = false;
	return (
		<nav className="z-10 w-full flex py-2 justify-between items-center navbar bg-black bg-opacity-30 absolute">
			<ul className="text-opacity-100 list-none sm:flex hidden justify-end items-center flex-1 mr-8 text-white ">
				<li className="font-poppins font-normal cursor-pointer text-[14px] hover:underline decoration-900 underline-offset-8 decoration-2 text-white mr-10  ">
					Trang chủ
				</li>
				<li className="font-poppins font-normal cursor-pointer text-[14px] hover:underline decoration-900 underline-offset-8 decoration-2 text-white mr-10 ">
					<a href="/travel">Du lịch</a>
				</li>
				<li className="font-poppins font-normal cursor-pointer text-[14px] hover:underline decoration-900 underline-offset-8 decoration-2 text-white mr-10 ">
					<a href="/food">Ẩm thực</a>
				</li>
				<li className="font-poppins font-normal cursor-pointer text-[14px] hover:underline decoration-900 underline-offset-8 decoration-2 text-white mr-10 ">
					<a href="/culture">Văn hóa</a>
				</li>
				<li className="font-poppins font-normal cursor-pointer text-[14px] hover:underline decoration-900 underline-offset-8 decoration-2 text-white mr-10 ">
					<a href="/search">Tìm kiếm</a>
				</li>
				<li className="font-poppins font-normal cursor-pointer text-[14px] hover:underline decoration-900 underline-offset-8 decoration-2 text-white mr-10 ">
					<a href="/about">Về chúng tôi</a>
				</li>
				<li className="font-poppins font-normal cursor-pointer  text-[14px] hover:underline decoration-900 underline-offset-8 decoration-2 text-white mr-4 ">
					{userLogin(isLogin)}
				</li>
				<li style={verticalLine}></li>

				<li className="m-5 text-white text-[20px]">
					<BiLogoFacebook />
				</li>

				<li className="mr-5 text-white text-[20px]">
					<BiLogoYoutube />
				</li>
				<li className="mr-5 text-white text-[20px]">
					<BiLogoTiktok />
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
