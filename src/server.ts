import express, { Request, Response } from "express";
import cors from "cors";
import movieRouter from "./routers/movieRouter.js";
import { connectDb } from "./config/database.js"
import userRouter from "./routers/userRouter.js";
import ratingRouter from "./routers/ratingRouter.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/status",(req:Request,res:Response)=>{
    res.sendStatus(200);
})

app.use('/user',userRouter);
app.use('/movie',movieRouter);
app.use('/ratings',ratingRouter);

app.listen(4000, () =>{
  connectDb();
  console.log(`Servidor ouvindo em localhost:4000`)
}
);