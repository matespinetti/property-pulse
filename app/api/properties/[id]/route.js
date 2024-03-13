import connectDB from "@/config/database";
import Property from "@/models/Property";
import { NextResponse } from "next/server";
// GET /api/properties/[id]
export const GET = async (request, { params }) => {
	try {
		await connectDB();
		const property = await Property.findById(params.id);
		if (!property) {
			return NextResponse("Property not found", { status: 404 });
		}
		return NextResponse.json(property, { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse("Something went wrong", { status: 500 });
	}
};
