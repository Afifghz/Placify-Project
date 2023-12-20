import { response } from "express";
import Product from "../models/ProductModel.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        console.log(error.message);
    }
}

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(product[0]);
    } catch (error) {
        console.log(error.message);
    }
}

export const getProductsByPrice = async (req, res) => {
    const { order } = req.query;

    try {
        let products;

        if (order === 'asc') {
            products = await Product.findAll({
                order: [['price', 'ASC']]
            });
        } else if (order === 'desc') {
            products = await Product.findAll({
                order: [['price', 'DESC']]
            });
        } else {
            // Jika tidak ada query order atau tidak valid, kirim response error
            return res.status(400).json({ message: 'Invalid or missing order parameter' });
        }

        res.json(products);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Server error' });
    }
}

export const getProductsByFilters = async (req, res) => {
    const { order, place } = req.query;
  
    try {
      let products;
  
      if (order === 'asc') {
        products = await Product.findAll({
          order: [['price', 'ASC']]
        });
      } else if (order === 'desc') {
        products = await Product.findAll({
          order: [['price', 'DESC']]'attributes
        });z'
        });
      } else {
        return res.status(400).json({ message: 'Invalid or missing order parameter' });
      }
  
      if (place) {
        const locations = place.split(',');
        products = await Product.findAll({
          where: {
            place: locations
          }
        });
      }
  
      res.json(products);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  