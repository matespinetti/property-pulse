import React from "react";
import InfoBox from "./InfoBox";

const InfoBoxes = () => {
	return (
		<section>
			<div className="container-xl lg:container m-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
					<InfoBox
						heading="For renters"
						description="Find your dream rental property. Bookmark properties
							and contact owners."
						buttonInfo={{
							link: "/properties",
							backgroundColor: "bg-black",
							text: "Browse Properties",
						}}
					/>

					<InfoBox
						heading="For Property Owners"
						description="List your properties and reach potential tenants. Rent as an airbnb or long term."
						buttonInfo={{
							link: "/properties/add",
							backgroundColor: "bg-blue-500",
							text: "Add Property",
						}}
						backgroundColor="bg-blue-100"
						textColor="text-blue-800"
					/>
				</div>
			</div>
		</section>
	);
};

export default InfoBoxes;
