import mongoose from "mongoose";
import 'dotenv/config';

const connectDB = async () => {

        mongoose.connection.on('connected', () => {
        console.log("db is connected");
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)
    


};

export default connectDB;