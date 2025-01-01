import express from "express";  
import cors from "cors";
import 'dotenv/config';
import connectDB from "./config/mongodb.js";


//app config
const app = express();
const port = process.env.PORT || 8000;
connectDB();

//middlewares
app.use(cors());
app.use(express.json());

//routes    
app.get("/", (req, res) => res.status(200).send("Api working"));

//listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));