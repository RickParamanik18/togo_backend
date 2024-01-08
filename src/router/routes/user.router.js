import express from "express";
import userController from "../../controller/user.controller.js";

const router = express.Router();

router.post("/signin", userController.signin);

export default router;
