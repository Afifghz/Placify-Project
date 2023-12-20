import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Product = db.define('product', {
    title : DataTypes.STRING,
    place : DataTypes.STRING,
    price : DataTypes.DECIMAL(10, 2),
    url : DataTypes.STRING,
    capacity : DataTypes.INTEGER,
    hasWiFi: DataTypes.BOOLEAN,
    hasMushola: DataTypes.BOOLEAN,
    hasSoundSystem: DataTypes.BOOLEAN,
    hasProjector: DataTypes.BOOLEAN,
    hasAC: DataTypes.BOOLEAN
},{
    freezeTableName: true
});

export default Product;

(async()=>{
    await db.sync();
})();