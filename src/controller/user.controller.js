import asyncHandler from "../utils/asyncHandler.util.js";
import ApiResponse from "../utils/apiResponse.util.js";
import userServices from "../services/user.service.js";

const signin = asyncHandler(async (req, res) => {
    const bodyParams = req.body;

    const data = await userServices.signin(bodyParams);

    res.send(new ApiResponse(200, "Success", data));
});

export default { signin };
