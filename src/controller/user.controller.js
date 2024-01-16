import asyncHandler from "../utils/asyncHandler.util.js";
import ApiResponse from "../utils/apiResponse.util.js";
import userServices from "../services/user.service.js";

const signin = asyncHandler(async (req, res) => {
    const bodyParams = req.body;

    const data = await userServices.signin(bodyParams);

    res.status(data ? 200 : 400).json(
        new ApiResponse(
            data ? 200 : 400,
            data ? "signin successful" : "user already exists",
            data
        )
    );
});

export default { signin };
