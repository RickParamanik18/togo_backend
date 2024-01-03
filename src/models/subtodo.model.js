import mongoose from "mongoose";

const subTodoSchema = mongoose.Schema(
    {
        creatorId: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        deadline: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ["pending", "working", "review", "finished"],
            default: "pending",
        },
    },
    { timeStamps: true }
);

const Subtodo = mongoose.model("subtodo", subTodoSchema);
export default Subtodo;
