import {
	ChevronDownIcon,
	Cog6ToothIcon,
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
	Navbar,
	Typography
} from "@material-tailwind/react";
import React from "react";

// profile menu component
const profileMenuItems = [
	{
		label: "My Profile",
		icon: UserCircleIcon,
	},
	{
		label: "Edit Profile",
		icon: Cog6ToothIcon,
	},
	{
		label: "Inbox",
		icon: InboxArrowDownIcon,
	},
	{
		label: "Help",
		icon: LifebuoyIcon,
	},
	{
		label: "Sign Out",
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
						src="./src//admin/logo.png"
						alt="Bordered avatar"
					/>

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



export function HeaderAdmin() {
	const [isNavOpen, setIsNavOpen] = React.useState(false);

	const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

	React.useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth >= 960 && setIsNavOpen(false)
		);
	}, []);

	return (
		<Navbar className="p-2  lg:pl-6 text-black">
			<div className="relative mx-auto flex items-center text-blue-gray-900">
				<div className="relative flex w-full  md:w-max">
					<form>
						<div className="relative">
							<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<svg
									className="w-4 h-4 text-gray-500 dark:text-gray-400"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 20 20"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
									/>
								</svg>
							</div>
							<input
								type="search"
								id="default-search"
								className=" w-full p-2 pl-10 text-sm text-gray border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-200  dark:text-black "
								required
							/>
							<button
								type="submit"
								className="text-white absolute ml-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:none"
							>
								Search
							</button>
						</div>
					</form>
				</div>
			
				<ProfileMenu />
			</div>
			
		</Navbar>
	);
}

export default HeaderAdmin;
