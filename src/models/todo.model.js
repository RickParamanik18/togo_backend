import mongoose from "mongoose";

const todoSchema = mongoose.Schema(
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

const Todo = mongoose.model("todo", todoSchema);
export default Todo;
