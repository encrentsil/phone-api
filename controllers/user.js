import { UserModel } from "../models/users.js";

//Signup user
export const userSignup = async(req,res,) => {
    // Grabbing request from the body
    const{username, password} = req.body;
    
    //signing up  user
    try {
        const user = await UserModel.signup(username, password)
    res.status(201).json('Sign up successfully')

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}