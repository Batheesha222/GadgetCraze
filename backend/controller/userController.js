import userModel from '../models/userModel.js';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const getToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
}


//Routes for user login 
const loginUser = async (req, res) => {

}


//Routes for user registration
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const exist = await userModel.findOne({ email });
        if (exist) {
            return res.status(400).json({success: false, message: "User already exists" });
        }
        if(!validator.isEmail(email)){
            return res.status(400).json({success: false, message: "Invalid email" });
        }
        if(password.length < 6){
            return res.status(400).json({success: false, message: "enter password more than 6 characters" });
        }
        
        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const newUser = await userModel({
            name,
            email,
            password: hashPassword
        })
        const user = await newUser.save();
        const token = getToken(user._id);
        res.json({
            success: true,
            token
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, message: error.message });
    }

}

//Routes for admin login 
const adminLoginUser = async (req, res) => {

}


export {loginUser, registerUser, adminLoginUser};