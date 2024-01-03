import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        creatorId: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        subTodos: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "subtodo",
            },
        ],
    },
    { timeStamps: true }
);

const User = mongoose.model("user", userSchema);
export default User;
