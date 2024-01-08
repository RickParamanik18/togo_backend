import User from "../models/user.model.js";
const signin = async (data) => {
    const { name, email, password, todos = [] } = data;
    console.log(process.env.DB_URI);
    const newUser = new User({
        name,
        email,
        password,
        todos,
    });
    const userRecord = await newUser.save();
    return { name: "rick", ...data };
};

export default { signin };
