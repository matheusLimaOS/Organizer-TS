import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/status",(req:Request,res:Response)=>{
    res.sendStatus(200);
})

app.listen(4000, () =>
  console.log(`Servidor ouvindo em localhost:4000`)
);
