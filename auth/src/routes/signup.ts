import express, { Router, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { expressValidator } from "../middleware/expressValidator";

const router = Router();

router.post("/api/users/signup",expressValidator,(req: Request,res: Response)=>{
    console.log("Creating a user...");
    res.send({
        username: req.body.email,
        password : req.body.password
    })
});

export {router as signupRouter};
