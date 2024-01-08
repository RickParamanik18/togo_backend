import userRepository from "../repositories/user.repository.js";

const signin = async (params) => {
    const data = await userRepository.signin(params);
    return data;
};

export default { signin };
