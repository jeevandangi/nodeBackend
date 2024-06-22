
import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const dbConnect= async ()=>{
    try {
        const res = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log("connection succesful");

    } catch (error) {
        console.log("database connection fail",error);
        process.exit(); 
    }
}

export default dbConnect