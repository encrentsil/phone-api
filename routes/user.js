import { Router } from "express";
import { userSignup } from "../controllers/user.js";


//Creating route
const userRouter = Router();


//Defining signup route
userRouter.post('/signup', userSignup)


//Defining login route
userRouter.post('/login',)



export default userRouter