import express from "express";
import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

// Routes

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.get("/api/users/currentuser",(req,res)=>{
    res.send("HI THERE!!!!!!")
})

app.listen(PORT,()=>{
    console.log(`PORT ${PORT}, Auth Service stablished successfully`);
})