import { Request, Response } from "express";
import { Rating } from "../protocols";
import { insertRatingSchema } from "../schemas/ratingSchema.js";
import { getRatingOfMovie, insertRatingDB, getRatingByIds, updateRating } from "../repositories/ratingRepository.js";
import { getByID, updateMovieRating } from "../repositories/movieRepository.js";

export async function insertRating(req:Request,res:Response){
    try{
        let body:Rating = req.body;
        const validate = await insertRatingSchema.validate(body,{abortEarly:false})

        if(validate.error){
            res.status(400).send(validate.error.details);
        }
        
        const movie = await getByID(body.movieId.toString());

        if(movie === null){
            return res.status(404).send({message: "movie not found"});
        }

        const rating = await getRatingByIds(body.movieId,body.userId);

        if(rating !== null){
            await updateRating(rating.id,body);
        }
        else{
            await insertRatingDB(body);
        }

        const ratingNums = await getRatingOfMovie(body.movieId)

        await updateMovieRating(ratingNums._sum.rating / ratingNums._count.id, body.movieId);

        res.sendStatus(200);
    }
    catch(e){
        console.log(e)
        res.status(500);
    }
}