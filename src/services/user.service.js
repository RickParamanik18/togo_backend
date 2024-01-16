import userRepository from "../repositories/user.repository.js";

const signin = async (params) => {
    // checking if user already exist or not..
    let userData = await userRepository.getUser(params.email);
    if (userData) return null;
    // creating a new user
    userData = await userRepository.createUser(params);
    userData = userData.toObject();
    delete userData.password;
    //send token

    return userData;
};

export default { signin };
