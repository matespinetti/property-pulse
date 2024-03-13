"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchProperty } from "@/utils/requests";

export default function Page() {
	const { id } = useParams();
	const [property, setProperty] = useState();
	const [loading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchPropData = async () => {
			if (!id) return;
			setIsLoading(true);
			try {
				const prop = await fetchProperty(id);
				setProperty(prop);
			} catch (error) {
				console.error("Error fetching property:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchPropData();
	}, [id]);

	return (
		<div>
			<h1 className="">Home Page</h1>
			{property && <p className="text-red-700">{property._id}</p>}
		</div>
	);
}
