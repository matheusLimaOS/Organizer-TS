import { Request, Response } from "express";
import { insertMovieSchema } from "../schemas/movieSchema.js";
import { EntityMovie, Movie } from "../protocols";
import { ValidationResult } from "joi";
import { insert, get, getAlreadySaw, update, del, getByID } from "../repositories/movieRepository.js";

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

export async function getMoviesAlreadySaw(req:Request,res:Response){
    try{
        let movies:EntityMovie[] = await getAlreadySaw(); 

        res.status(200).send(movies);
    }
    catch(e){
        console.log(e)
        res.status(500);
    }
}

export async function updateMovie(req:Request,res:Response){
    try{
        let comment:string = req.body.comment;
        let id:string = req.params.id

        let getID:EntityMovie[] = await getByID(id);

        if(getID.length === 0){
            res.status(404).send({message: "movie not found"});
        }

        if(comment.length > 250){
            res.status(422).send({message: "length must be less than or equal to 250 characters long"});
            return;
        }
        
        await update(id,comment) 

        res.sendStatus(200);
    }
    catch(e){
        console.log(e)
        res.status(500);
    }
}

export async function deleteMovie(req:Request,res:Response){
    try{
        let id:string = req.params.id
        let getID:EntityMovie[] = await getByID(id);

        if(getID.length === 0){
            res.status(404).send({message: "movie not found"});
        }
        
        await del(id) 

        res.sendStatus(200);
    }
    catch(e){
        console.log(e)
        res.status(500);
    }
}