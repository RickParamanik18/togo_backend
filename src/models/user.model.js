import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        todos: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "todo",
            },
        ],
    },
    { timeStamps: true }
);

const User = mongoose.model("user", userSchema);
export default User;
