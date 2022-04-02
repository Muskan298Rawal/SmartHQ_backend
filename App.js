import express from "express";
import cors from "cors";
import dotenv from 'dotenv';

const app = express();

dotenv.config({path: './config.env'})

var corsOptions = {
  origin: "http://localhost:8081",
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res) => {
    res.json({ message: "hii this is smart HQ project"})
})

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log("Server is up and running")
})
