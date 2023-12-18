import { Sequelize } from "sequelize";

const db = new Sequelize("placify", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

export default db