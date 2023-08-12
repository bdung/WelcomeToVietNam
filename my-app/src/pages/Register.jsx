import React from "react";
import IMAGE_COVER from "../assets/images/image_cover.jpg";

export default function RegisterScreen() {
	return (
		<section class="bg-gray-50 min-h-screen flex items-center ">
			<div className="flex flex-col  lg:flex-row w-6/12 lg:w-6/12 bg-gray-100 required  rounded-2x1 shadow-lg max-w-3x1 container mx-auto sm:rounded-lg">
				<div
					className=" flex flex-col w-full lg:w-1/2 h-auto
			items-center rounded-tl-md rounded-bl-md"
					style={{ backgroundImage: `url(${IMAGE_COVER})` }}
				>
					<p className="h-16"></p>
					<button
						type="submit"
						className="w-1/2 flex justify-center my-auto py-2 px-4 border 
								border-transparent rounded-md shadow-sm text-sm font-medium
								 text-white bg-cyan-600
								  hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 "
					>
						Đăng nhập
					</button>
					<p className="h-16"></p>
				</div>
				<div className="w-full lg:w-1/2 sm:mx-auto ssm:mx-auto ssm:max-w-xs ">
					<div className="flex flex-col w-full bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 ssm:max-w-xs ssm:px-6 ssm:rounded-lg">
						<form className="space-y-6" action="#" method="POST">
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700"
								>
									Email
								</label>
								<div className="mt-1">
									<input
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										placeholder="you@example.com"
										required
										className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:blue focus:border-indigo-500 sm:text-sm"
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="password"
									className="block text-sm font-medium text-gray-700"
								>
									Mật khẩu
								</label>
								<div className="mt-1">
									<input
										id="password"
										name="password"
										type="password"
										autoComplete="current-password"
										placeholder="Mật khẩu"
										required
										className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
									/>
								</div>
							</div>

							<div className="flex justify-center my-2">
								<button
									type="submit"
									className="w-1/2 flex justify-center py-2 px-4 border 
									border-transparent rounded-md shadow-sm text-sm font-medium
									 text-white bg-cyan-600
									  hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 "
								>
									Đăng ký
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
