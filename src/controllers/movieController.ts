import { Request, Response } from "express";
import { insertMovieSchema } from "../schemas/movieSchema.js";
import { EntityMovie, Movie, MovieWithoutRatings } from "../protocols";
import { ValidationResult } from "joi";
import { insert, get , del, getByID } from "../repositories/movieRepository.js";
import { deleteRatingByMovieId } from "../repositories/ratingRepository.js";

export async function insertMovie(req:Request,res:Response){
    try{
        let body:Movie = req.body;

        body.rating = 0;
        
        const validation:ValidationResult<Movie> = insertMovieSchema.validate(body,{abortEarly:false,convert: false});

        if(validation.error){
            const erros:string[] = validation.error.details.map((detail) => detail.message);
            res.status(422).send(erros);
            return;
        }

        await insert(body); 

        res.sendStatus(200);
    }
    catch(e){
        console.log(e)
        res.status(500);
    }
}

export async function getMovies(req:Request,res:Response){
    try{
        let movies:EntityMovie[] = await get(); 

        res.status(200).send(movies);
    }
    catch(e){
        console.log(e)
        res.status(500);
    }
}

export async function deleteMovie(req:Request,res:Response){
    try{
        let id:string = req.params.id
        let getID:MovieWithoutRatings = await getByID(id);

        if(getID === null){
            return res.status(404).send({message: "movie not found"});
        }
        
        //await deleteRatingByMovieId(Number(id));
        await del(id);

        res.sendStatus(200);
    }
    catch(e){
        console.log(e)
        res.status(500);
    }
}