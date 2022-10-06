import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Feature = ({ feature }) => {
	return (
		<div className="flex items-center my-2">
			<div className="w-10 h-10">
				<CheckCircleIcon />
			</div>
			<div className="text-[20px] ml-3">{feature}</div>
		</div>
	);
};

export default Feature;
