import express from "express";  
import cors from "cors";
import 'dotenv/config';
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import connectCloudinary from "./config/cloudinary.js";

//app config
const app = express();
const port = process.env.PORT || 8000;
connectDB();
connectCloudinary();

//middlewares
app.use(cors());
app.use(express.json());

//api endpoints
app.use('/api/user',userRouter);
app.use('/api/product',productRouter);


//routes    
app.get("/", (req, res) => res.status(200).send("Api working"));

//listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));