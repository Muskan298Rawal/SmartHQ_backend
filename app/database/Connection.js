import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config({path: './config.env'})


const DB = process.env.DATABASE

export async function connectMongo(){
    try{
        await mongoose.connect(DB, {
        useNewUrlParser: true,
        // useCreateIndex: true,
        useUnifiedTopology: true,
        // useFindAndModify: false, 
        });

        console.log("Connection Successful")
    }
    catch(error){
        console.log(error, 'connection failed')
    }
   
}

// module.exports = { connectMongo }