import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Product = db.define('products', {
    title : DataTypes.STRING,
    place : DataTypes.STRING,
    price : DataTypes.DECIMAL(10, 2),
    url : DataTypes.STRING
},{
    freezeTableName: true
});

export default Product;

(async()=>{
    await db.sync();
})();