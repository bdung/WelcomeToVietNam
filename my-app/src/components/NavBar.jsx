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
			<div className=" pl-10 relative inset-x-0 mt-5 mb-5">
				<span class="absolute inset-y-0 left-10 flex items-center pl-2">
					<button
						type="submit"
						class="p-1 focus:outline-none focus:shadow-outline"
					>
						<svg
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							class="w-6 h-6"
							color="#1AA1D5"
						>
							<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
						</svg>
					</button>
				</span>
				<input
					type="search"
					name="q"
					class="py-2 text-sm bg-gray-100 pl-10 focus:bg-white focus:text-gray-900 w-80 p-2 rounded-full focus:outline-none focus:ring focus:border-blue-300"
					placeholder="Tìm kiếm bài viết..."
					autocomplete="off"
				/>
			</div>
			<ul className="text-opacity-100 list-none sm:flex hidden justify-end items-center flex-1 mr-8 text-white ">
				<li className="active:underline font-poppins font-normal cursor-pointer text-[14px] hover:underline decoration-900 underline-offset-8 decoration-2 text-white mr-10  ">
					<a href="/">Trang chủ</a>
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
