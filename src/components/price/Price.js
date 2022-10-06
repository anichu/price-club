import React from "react";
import Feature from "../feature/Feature";

const Price = ({ item }) => {
	const { price, features, name, duration } = item;
	return (
		<div className="bg-teal-900 w-full h-[500px] z-[]  my-5 text-white p-4 rounded-lg shadow-lg relative">
			<h1 className="text-4xl font-bold text-center">
				{" "}
				${price}/<span className="text-xl font-semibold">{duration}</span>
			</h1>
			<h2 className="text-2xl text-center my-5 uppercase ">{name}</h2>
			<div className="mt-5">
				{features.map((feature, idx) => (
					<Feature feature={feature} key={idx} />
				))}
				<div className="text-center w-full cursor-pointer  mt-4 absolute bottom-5 left-0 ">
					<button className="bg-white rounded capitalize font-semibold  hover:bg-slate-200 duration-200 ease-in-out  text-black px-6 py-2 block w-4/5 mx-auto">
						get start
					</button>
				</div>
			</div>
		</div>
	);
};

export default Price;
