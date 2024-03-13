import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
	{
		email: {
			type: String,
			required: [true, "Email is required"],
			unique: [true, "Email already exists"],
		},
		username: {
			type: String,
			required: [true, "Username is required"],
		},

		image: {
			type: String,
		},
		bookmarks: [
			{
				type: Schema.Types.ObjectId,
				ref: "Property",
			},
		],
	},
	{
		timestamps: true,
	}
);

const User = models.user || model("User", userSchema);

export default User;