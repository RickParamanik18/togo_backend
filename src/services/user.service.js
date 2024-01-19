import userRepository from "../repositories/user.repository.js";

const signin = async (params) => {
    // checking if user already exist or not..
    let userData = await userRepository.getUser(params.email);
    if (userData) return null;
    // creating a new user
    userData = await userRepository.createUser(params);
    userData = userData.toObject();
    delete userData.password;

    return userData;
};

const login = async (params) => {
    // getting users data
    let userData = await userRepository.getUser(params.email);

    if (!userData) return null;
    userData = userData.toObject();

    if (params.password === userData.password) return userData;
    else return null;
};
export default { signin, login };
