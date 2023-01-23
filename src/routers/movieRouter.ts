import { Router } from "express";
import { getMovies, insertMovie } from "../controllers/movieController.js";

const movieRouter = Router();

movieRouter.post("/movie", insertMovie);
movieRouter.get("/movie", getMovies);

export default movieRouter;