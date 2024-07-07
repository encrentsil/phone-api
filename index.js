import express from "express";
import { dbConnection } from "./config/db.js";
import phoneRouter from "./routes/phone.js";
import userRouter from "./routes/user.js";

//Creating express route
const app = express()

//Creating Middleware
app.use(express.json());

//Use route
app.use(phoneRouter);
app.use(userRouter);

dbConnection()


//Listening for incoming messages
const port = 2000

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})