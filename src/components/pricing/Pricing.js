import React from "react";
import Price from "../price/Price";

const Pricing = () => {
	const pricing = [
		{
			id: 1,
			price: 0,
			name: "Free",
			features: [
				"Grammar",

				"Spelling",

				"Punctuation",

				"Conciseness",
				"Tone detection",
			],
			duration: "year",
		},
		{
			id: 2,
			price: 9.99,
			name: "Premium",
			features: [
				"Everything in Premium",

				"Full-sentence rewrites",

				"Word choice",

				"Tone suggestions",
				"Citations",
			],
			duration: "year",
		},
		{
			id: 3,
			price: 4.5,
			name: "Medium",
			features: [
				"Everything in Medium",

				"Style guide",

				"Snippets",

				"Analytics dashboard",
				"Account roles and permissions",
				"SAML single sign-on",
			],
			duration: "month",
		},
	];
	return (
		<div>
			<h1 className="text-4xl bg-teal-600 md:w-1/3 sm:w-[400px] text-white px-2 py-2 text-center  shadow rounded-md mx-auto mt-6">
				{" "}
				Best deal of this tone
			</h1>
			<div className="grid mx-10 mt-10 md:grid-cols-3 sm:grid-cols-2 gap-4 justify-center">
				{pricing.map((price) => (
					<Price item={price} key={price.id} />
				))}
			</div>
		</div>
	);
};

export default Pricing;
