import Transaction from "../models/TransactionModel.js";
import User from "../models/UserModel.js";

export const createTransaction = async (req, res) => {
    const { namaCustomer, waktuAwal, waktuAkhir, jumlahTamu, noTelp, tanggalSewa } = req.body;
    try {
        await Transaction.create({
            namaCustomer : namaCustomer,
            jumlahTamu : jumlahTamu,
            noTelp : noTelp,
            waktuAwal :waktuAwal,
            waktuAkhir :waktuAkhir,
            tanggalSewa :tanggalSewa,
        });
        res.json({msg: "Sewa Sukses"});
    } catch (error) {
        console.log(error.message);
    }
}
