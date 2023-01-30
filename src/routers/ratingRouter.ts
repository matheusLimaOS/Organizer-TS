import { Router } from "express";
import { insertRating } from "../controllers/ratingController.js";

const ratingRouter = Router();

ratingRouter.post("/",insertRating)

export default ratingRouter;