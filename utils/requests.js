const apiDomain = process.env.NEXT_PUBLIC_API_URL;

// fetch all properties
export async function fetchProperties() {
	try {
		const res = await fetch(`${apiDomain}/properties`);

		if (!res.ok) {
			throw new Error("Error fetching properties");
		}
		return res.json();
	} catch (error) {
		console.error("Error fetching properties", error);
	}
}

//fetch single property

export async function fetchProperty(id) {
	try {
		const res = await fetch(`${apiDomain}/properties/${id}`);
		if (!res.ok) {
			throw new Error("Error fetching property");
		}
		return res.json();
	} catch (error) {
		console.error("Error fetching property", error);
	}
}
