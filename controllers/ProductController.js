import ProductModel from "../models/ProductModel.js";
import multer from "multer";
import path from "path";

export const getAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.findAll();
        res.json(products);
    } catch (error) {
        res.json({ message: error.message });
    }
}