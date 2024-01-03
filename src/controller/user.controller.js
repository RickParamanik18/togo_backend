import asyncHandler from "../utils/asyncHandler.util.js";
import ApiResponse from "../utils/apiResponse.util.js";

const signin = asyncHandler(async (req, res) => {
    //code
    res.send(new ApiResponse(200, "Success", {}));
});

export { signin };
