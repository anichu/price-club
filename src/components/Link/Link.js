import React from "react";

const Link = ({ route, className }) => {
	return (
		<li className="mx-5">
			<a href="" className={`text-2xl font-semibold ${className}`}>
				{route.name}
			</a>
		</li>
	);
};

export default Link;
