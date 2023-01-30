import { Router } from "express";
import { insertUser } from "../controllers/userController.js";

const userRouter = Router();

userRouter.get("/", insertUser);

export default userRouter;
