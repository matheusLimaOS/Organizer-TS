import { Router } from "express";
import { deleteMovie, getMovies, getMoviesAlreadySaw, insertMovie, updateMovie } from "../controllers/movieController.js";

const movieRouter = Router();

movieRouter.post("/movie", insertMovie);
movieRouter.get("/movie", getMovies);
movieRouter.get("/movie/alreadySeen", getMoviesAlreadySaw);
movieRouter.put("/movie/:id", updateMovie);
movieRouter.delete("/movie/:id", deleteMovie);


export default movieRouter;