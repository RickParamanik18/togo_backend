import asyncHandler from "../utils/asyncHandler.util.js";
import ApiResponse from "../utils/apiResponse.util.js";
import userServices from "../services/user.service.js";
import jwt from "jsonwebtoken";

const signin = asyncHandler(async (req, res) => {
    const bodyParams = req.body;

    const data = await userServices.signin(bodyParams);

    //sending cookie
    if (data) {
        const token = jwt.sign(data, process.env.JWT_SECRET);
        console.log(token);
        res.cookie("authorization", token, { maxAge: 1000 * 60 * 60 * 24 });
        res.cookie("userData", data, { maxAge: 1000 * 60 * 60 * 24 });
    }

    res.status(data ? 200 : 400).json(
        new ApiResponse(
            data ? 200 : 400,
            data ? "signin successful" : "user already exists",
            data
        )
    );
});

export default { signin };
