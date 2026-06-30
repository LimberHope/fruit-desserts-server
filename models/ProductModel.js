import { DataTypes } from "sequelize";
import db from "../database/db.js";

const ProductModel = db.define('Product', {
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.FLOAT,
    },
    imgUrl: {
        type: DataTypes.STRING,
    }
});

export default ProductModel;