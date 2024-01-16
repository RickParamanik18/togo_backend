import User from "../models/user.model.js";
const createUser = async (data) => {
    const { name, email, password, todos = [] } = data;

    const newUser = new User({
        name,
        email,
        password,
        todos,
    });
    const userRecord = await newUser.save();
    return userRecord;
};

const getUser = async (email) => {
    const userData = await User.findOne({ email });
    return userData;
};

export default { createUser, getUser };
