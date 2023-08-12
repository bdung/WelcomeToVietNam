import {
	InboxArrowDownIcon,
	LifebuoyIcon,
	PowerIcon,
	UserCircleIcon
} from "@heroicons/react/24/outline";
import {
	Button,
	Menu,
	MenuHandler,
	MenuItem,
	MenuList,
	Typography
} from "@material-tailwind/react";
import React from "react";

// profile menu component
const profileMenuItems = [
	{
		label: "Trang cá nhân",
		icon: UserCircleIcon,
	},

	{
		label: "Tin nhắn",
		icon: InboxArrowDownIcon,
	},
	{
		label: "Giúp đỡ",
		icon: LifebuoyIcon,
	},
	{
		label: "Đăng xuất",
		icon: PowerIcon,
	},
];

function ProfileMenu() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const closeMenu = () => setIsMenuOpen(false);

	return (
		<Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
			<MenuHandler>
				<Button
					variant="text"
					color="blue-gray"
					className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
				>
					<img
						class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
						src="http://localhost:3000/assets/culture_blog_01.jpg"
						alt="Bordered avatar"
					/>
				</Button>
			</MenuHandler>
			<MenuList className="p-1 z-30">
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
								className="font-poppins font-normal pt-1"
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

export default function Account() {
	return <ProfileMenu />;
}
