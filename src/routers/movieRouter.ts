import { Router } from "express";
import { insertMovie } from "../controllers/movieController.js";

const movieRouter = Router();

movieRouter.post("/movie", insertMovie);

export default movieRouter;