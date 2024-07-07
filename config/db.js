import mongoose from "mongoose";

const dbConnect = process.env.Mongo_url

export const dbConnection = () => {
    mongoose.connect (dbConnect).then(() => {
        console.log('Database is connected')
    });
};