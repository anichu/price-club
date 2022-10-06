import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
	const [open, setOpen] = useState(true);
	const routes = [
		{
			name: "Home",
			id: 1,
		},
		{
			id: 2,
			name: "Products",
		},
		{
			id: 3,
			name: "Orders",
		},
		{
			id: 4,
			name: "Cards",
		},
	];
	return (
		<nav className="w-full bg-teal-500 text-white">
			<div
				onClick={() => setOpen((prev) => !prev)}
				className="w-10 h-10 cursor-pointer  md:hidden font-2xl"
			>
				{open ? <XMarkIcon /> : <Bars3Icon />}
			</div>
			<ul
				className={`w-full bg-teal-500 z-10 md:flex items-center  md:static duration-200 ease-in-out absolute justify-center py-4 ${
					open ? "top-8" : "top-[-1000px]"
				}`}
			>
				{routes.map((route) => (
					<Link route={route} key={route.id} />
				))}
			</ul>
		</nav>
	);
};

export default NavBar;
