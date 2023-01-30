import express, { Request, Response } from "express";
import cors from "cors";
import movieRouter from "./routers/movieRouter.js";
import { connectDb } from "./config/database.js"

const app = express();
app.use(express.json());
app.use(cors());

app.get("/status",(req:Request,res:Response)=>{
    res.sendStatus(200);
})

app.use(movieRouter)

app.listen(4000, () =>{
  connectDb();
  console.log(`Servidor ouvindo em localhost:4000`)
}
);
