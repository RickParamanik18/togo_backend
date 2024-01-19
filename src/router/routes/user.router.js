import express from "express";
import userController from "../../controller/user.controller.js";
import paramsChecker from "../../middlewares/paramsChecker.middleware.js";
import asyncHandler from "../../utils/asyncHandler.util.js";

const router = express.Router();

router.post(
    "/signin",
    paramsChecker(["name", "email", "password"]),
    asyncHandler(userController.signin)
);
router.post(
    "/login",
    paramsChecker(["email", "password"]),
    asyncHandler(userController.login)
);
export default router;
