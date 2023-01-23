import { Request, Response } from "express";
import { insertMovieSchema } from "../schemas/movieSchema.js";
import { EntityMovie, Movie } from "../protocols";
import { ValidationResult } from "joi";
import { insert, get } from "../repositories/movieRepository.js";

export async function insertMovie(req:Request,res:Response){
    try{
        let body:Movie = req.body;
        
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