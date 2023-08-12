import React from "react";
import { Route } from "react-router-dom";
import Model from "./layoutPost";
import TextEditor from "./textEditor";

import {
	Navbar,
	MobileNav,
	Typography,
	Button,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Avatar,
	Card,
	IconButton,
	Checkbox,
} from "@material-tailwind/react";
import {
	CubeTransparentIcon,
	UserCircleIcon,
	CodeBracketSquareIcon,
	Square3Stack3DIcon,
	ChevronDownIcon,
	Cog6ToothIcon,
	InboxArrowDownIcon,
	LifebuoyIcon,
	PowerIcon,
	RocketLaunchIcon,
	Bars2Icon,
} from "@heroicons/react/24/outline";
const profileMenuItems = [
	{
		label: "Du lịch",
		icon: UserCircleIcon,
	},
	{
		label: "Ẩm thực",
		icon: Cog6ToothIcon,
	},
	{
		label: "Văn hóa",
		icon: InboxArrowDownIcon,
	},
	{
		label: "Khác",
		icon: LifebuoyIcon,
	},
];

function ThemeMenu() {
	const [value, setValue] = React.useState("");
	const getValue = (value) => {
		setValue(value);
	};
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const closeMenu = () => setIsMenuOpen(false);

	return (
		<Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
			<MenuHandler>
				<Button
					variant="text"
					color="blue-gray"
					className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5  rounded-lg bg-gray-50"
				>
					<h4>Du lịch</h4>
					<ChevronDownIcon
						strokeWidth={2.5}
						className={`h-3 w-3 transition-transform ${
							isMenuOpen ? "rotate-180" : ""
						}`}
					/>
				</Button>
			</MenuHandler>
			<MenuList className="p-1">
				{profileMenuItems.map(({ label, icon }, key) => {
					const isLastItem = key === profileMenuItems.length - 1;
					return (
						<MenuItem
							key={label}
							onClick={closeMenu}
							className={`flex items-center gap-2 rounded ${
								isLastItem
									? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
									: ""
							}`}
						>
							{React.createElement(icon, {
								className: `h-4 w-4 ${
									isLastItem ? "text-red-500" : ""
								}`,
								strokeWidth: 2,
							})}
							<Typography
								as="span"
								variant="small"
								className="font-normal"
								color={isLastItem ? "red" : "inherit"}
							>
								{label}
							</Typography>
						</MenuItem>
					);
				})}
			</MenuList>
		</Menu>
	);
}

export default function AdminHomePage() {
	const [showModel, setShowModal] = React.useState(false);
	return (
		<div className="m-5 shadow sm:shadow md:shadow lg:shadow xl:shadow">
			<h2 className="text-center pb-5">Tạo bài</h2>
			<div className="text-start m-5 ">
				<div class="mb-6">
					<label
						for="default-input"
						class="block mb-2 text-sm font-medium text-gray-900 "
					>
						Nhập tiêu đề
					</label>
					<input
						type="text"
						id="default-input"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					/>
				</div>

				<h3 class="block mb-2 text-sm font-medium text-gray-900 ">
					Chọn chủ đề
				</h3>
				<ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
					<li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
						<div class="flex items-center pl-3">
							<input
								id="list-radio-license"
								type="radio"
								value=""
								name="list-radio"
								class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
							/>
							<label
								for="list-radio-license"
								class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Du lịch{" "}
							</label>
						</div>
					</li>
					<li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
						<div class="flex items-center pl-3">
							<input
								id="list-radio-id"
								type="radio"
								value=""
								name="list-radio"
								class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
							/>
							<label
								for="list-radio-id"
								class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Ẩm thực
							</label>
						</div>
					</li>
					<li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
						<div class="flex items-center pl-3">
							<input
								id="list-radio-millitary"
								type="radio"
								value=""
								name="list-radio"
								class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
							/>
							<label
								for="list-radio-millitary"
								class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Văn hóa
							</label>
						</div>
					</li>
					<li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
						<div class="flex items-center pl-3">
							<input
								id="list-radio-passport"
								type="radio"
								value=""
								name="list-radio"
								class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
							/>
							<label
								for="list-radio-passport"
								class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Khác
							</label>
						</div>
					</li>
				</ul>

				<label class="block mb-2 mt-5 text-sm font-medium text-gray-900 ">
					Mô tả
				</label>

				<TextEditor initialValue="" getValue={"value"} />

				<div className="flex items-center mt-5">
					<div className="block mb-2 text-sm font-medium text-gray-900 ">
						Xem trước
					</div>
					<div class="flex items-start ml-5 ">
						<input
							id="link-checkbox"
							type="checkbox"
							value=""
							class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
						/>
					</div>
				</div>
				<div className="flex justify-end m-5 ">
					<button
						class="text-white text-sm rounded-lg px-5 py-1.5
					 bg-blue-500 hover:bg-blue-600 text-center mr-3 
					 "onClick={() => setShowModal(true)}
					>
						Hủy
					</button>
					<button
						class="text-white text-sm rounded-lg px-5 py-1.5
					 bg-blue-500 hover:bg-blue-600 text-center  
					 "
						
					>
						Lưu
					</button>
				</div>
				<Model
					isVisible={showModel}
					onClose={() => setShowModal(false)}
				/>
			</div>
		</div>
	);
}
