import express from "express";
import { UserController } from "../controller/UserController"

export const userRouter = express.Router();

const userController = new UserController();

userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);
userRouter.post("/befriend", userController.addFriend);
userRouter.post("/unfriend", userController.unfriend);