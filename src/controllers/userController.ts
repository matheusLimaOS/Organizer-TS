import { Request, Response } from "express";
import { insertUserSchema } from "../schemas/userSchema.js";
import { insertUserDB } from "../repositories/userRepository.js";

export async function insertUser(req:Request,res:Response){
    try{
        let { name } = req.body;
        const validate = await insertUserSchema.validate({name},{abortEarly:false})
        if(validate.error){
            res.status(400).send(validate.error.details);
        }
        
        await insertUserDB({name});

        res.sendStatus(200);
    }
    catch(e){
        console.log(e)
        res.status(500);
    }
}