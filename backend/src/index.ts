import express, { type Request, type Response } from "express";
import { appConfig } from "./config/config.js";
import authRoute from "./routes/auth.route.js";

const app = express ();
app.use (express.json());

const PORT = appConfig.port

app.get ("/healtz",(req: Request, res: Response)=>{
    res.status(200).json({
        message : "Server OK!",
    });
});

app.use ("/api/v1/auth",authRoute);

app.listen(PORT, ()=>{
    console.log(`Your app is running on http://localhost:${PORT}`)
});
