import express, { type Request, type Response } from "express";

const app = express ();
express.json();

const PORT = 8000

app.get ("/healtz",(req: Request, res: Response)=>{
    res.status(200).json({
        message : "Server OK!",
    });
});

app.listen(8000, ()=>{
    console.log(`Your app is running on http://localhost:${8000}`)
});
