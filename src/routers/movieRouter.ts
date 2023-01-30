import { Router } from "express";
import { deleteMovie, getMovies, insertMovie } from "../controllers/movieController.js";

const movieRouter = Router();

movieRouter.post("/", insertMovie);
movieRouter.get("/", getMovies);
movieRouter.delete("/:id", deleteMovie);


export default movieRouter;