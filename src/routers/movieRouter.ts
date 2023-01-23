import { Router } from "express";
import { getMovies, getMoviesAlreadySaw, insertMovie } from "../controllers/movieController.js";

const movieRouter = Router();

movieRouter.post("/movie", insertMovie);
movieRouter.get("/movie", getMovies);
movieRouter.get("/movie/alreadySaw", getMoviesAlreadySaw);

export default movieRouter;