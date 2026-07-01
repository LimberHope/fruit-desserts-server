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

export const createProduct = async (req, res) => {
    try {
        const { title, description, price, category } = req.body;
        const img = req.file ? req.file.path : null;
        const product = await ProductModel.create({ title, description, price, category, imgUrl: img });
        res.json(product);
    } catch (error) {
        res.json({ message: error.message });
    }
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

export const uploadProduct = upload.single("image");