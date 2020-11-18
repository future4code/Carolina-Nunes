import express from "express";
import userController from "../controller/UserController"

export const userRouter = express.Router();

userRouter.post("/users/signup", userController.signup);
// userRouter.post("/users/login", userController.login);