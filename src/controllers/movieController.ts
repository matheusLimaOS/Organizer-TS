import { Request, Response } from "express";
import { insertMovieSchema } from "../schemas/movieSchema.js";
import { Movie } from "../protocols";
import { ValidationResult } from "joi";

export async function insertMovie(req:Request,res:Response){
    try{
        let body:Movie = req.body;
        
        const validation:ValidationResult<Movie> = insertMovieSchema.validate(body,{abortEarly:false,convert: false});

        if(validation.error){
            const erros:string[] = validation.error.details.map((detail) => detail.message);
            res.status(422).send(erros);
            return;
        }


        
        res.sendStatus(200);
    }
    catch(e){
        console.log(e)
        res.status(500);
    }
}