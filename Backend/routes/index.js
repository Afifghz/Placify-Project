import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { getProducts,getProductById, getProductsByFilters } from "../controllers/ProductControllers.js";
import { createTransaction } from "../controllers/TransactionControllers.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
router.get('/products', getProducts);
router.post('/transaction', createTransaction);
router.get('/products/:id', getProductById);
router.get('/productsByFilters', getProductsByFilters);


export default router;