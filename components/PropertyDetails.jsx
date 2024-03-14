import React from "react";
import {
	FaBed,
	FaBath,
	FaRulerCombined,
	FaTimes,
	FaCheck,
	FaMapMarker,
} from "react-icons/fa";
import PropertyPriceDetail from "./PropertyPriceDetail";

const PropertyDetails = ({ property }) => {
	return (
		<main>
			<div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
				<div className="text-gray-500 mb-4">{property.type}</div>
				<h1 className="text-3xl font-bold mb-4">{property.name}</h1>
				<div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
					<FaMapMarker className="text-lg text-orange-700 mr-2" />
					<p className="text-orange-700">
						{property.location.street}, {property.location.city},{" "}
						{property.location.state}
					</p>
				</div>

				<h3 className="text-lg font-bold my-6 bg-gray-800 text-white p-2">
					Rates & Options
				</h3>
				<div className="flex flex-col md:flex-row justify-around">
					<PropertyPriceDetail
						status="Nighly"
						price={property.rates.nightly}
					/>

					<PropertyPriceDetail
						status="Weekly"
						price={property.rates.weekly}
					/>
					<PropertyPriceDetail
						status="Monthly"
						price={property.rates.monthly}
					/>
				</div>
			</div>

			<div className="bg-white p-6 rounded-lg shadow-md mt-6">
				<h3 className="text-lg font-bold mb-6">
					Description & Details
				</h3>
				<div className="flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9">
					<p>
						<FaBed className="inline-block mr-2" /> {property.beds}{" "}
						<span className="hidden sm:inline">Beds</span>
					</p>
					<p>
						<FaBath className="inline-block mr-2" />
						{property.baths}{" "}
						<span className="hidden sm:inline">Baths</span>
					</p>
					<p>
						<FaRulerCombined className="inline-block mr-2" />
						{property.square_feet}{" "}
						<span className="hidden sm:inline">sqft</span>
					</p>
				</div>
				<p className="text-gray-500 mb-4">{property.description} </p>
			</div>

			<div className="bg-white p-6 rounded-lg shadow-md mt-6">
				<h3 className="text-lg font-bold mb-6">Amenities</h3>

				<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none">
					{property.amenities.map((amenity, index) => (
						<li key="index">
							<FaCheck className=" inline-block text-green-600 mr-2 " />
							{amenity}
						</li>
					))}
				</ul>
			</div>
			<div className="bg-white p-6 rounded-lg shadow-md mt-6">
				<div id="map"></div>
			</div>
		</main>
	);
};

export default PropertyDetails;
