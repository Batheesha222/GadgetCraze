import  {v2 as cloudinary} from 'cloudinary';
import productModel from '../models/productModel.js';

//add product
const addProduct = async (req, res) => {
    try {
        const {name, price, category} = req.body;
        const image1 =req.files.image1[0];

        const image = [image1].filter((item) => item !== undefined)

        let imageUrl = await Promise.all(
            image.map(async(item)=>{
                let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'});
                return result.secure_url;
            })
        )

        const productData = {
            name,
            price:Number(price),
            category,
            image: imageUrl,
            date: Date.now()
        }
        console.log(imageUrl)

        const product = new productModel(productData);
        await product.save();

        res.json({success: true, message: 'Product added successfully'});

    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: error.message});
    }
};


//list products
const listProducts = async (req, res) => {

};

//remove product

const removeProduct = async (req, res) => {

};

//single product info
const singleProduct = async (req, res) => {

};



export { addProduct, listProducts, removeProduct, singleProduct };