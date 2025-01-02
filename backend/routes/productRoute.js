import express from "express";
import { addProduct, listProducts, removeProduct, singleProduct } from "../controller/productController.js";
import upload from '../middleware/multer.js';


const productRouter = express.Router();



productRouter.post("/add", upload.fields([{ name: 'image1', maxCount: 1 }]),addProduct);
productRouter.get("/list",listProducts);
productRouter.post("/remove",removeProduct);
productRouter.post("/single",singleProduct);

export default productRouter;