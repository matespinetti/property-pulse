import React from "react";
import { FaTimes } from "react-icons/fa";

const PropertyPriceDetail = ({ status, price }) => {
	return (
		<div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
			<div className="text-gray-500 mr-2 font-bold">{status}</div>
			<div
				className={`text-2xl font-bold  ${
					status ? "text-blue-500" : ""
				}`}
			>
				{price ? `$${price}` : <FaTimes className="text-red-700" />}
			</div>
		</div>
	);
};

export default PropertyPriceDetail;
