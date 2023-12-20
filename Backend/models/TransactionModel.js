import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Transaction = db.define('transaction', {
    namaCustomer: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    noTelp: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    waktuAkhir: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    waktuAwal: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    tanggalSewa: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    jumlahTamu: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('pending', 'success', 'failed'),
        defaultValue: 'pending',
        allowNull: false
    }
}, {
    freezeTableName: true,
})

export default Transaction;

(async()=>{
    await db.sync();
})