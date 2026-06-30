import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import db from "./database/db.js";
import ProductModel from "./models/ProductModel.js";
import { getAllProducts } from "./controllers/ProductController.js";

const app = express();
config();

app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/products", getAllProducts);

try {
    await db.authenticate();
    // await db.sync(); crea tabla
    // await db.sync({ force: true }); // force: true borra las tablas existentes y lo recrea
    await ProductModel.sync();
    console.log("Connected to the database successfully");
} catch (error) {
    console.log(error);
}

app.listen(process.env.PORT, () => {
   console.log(`Server is running on port ${process.env.PORT}`);
});