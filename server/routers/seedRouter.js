import express from 'express';
import Product from '../model/product.js';
import data from '../data.js';
import User from '../model/user.js';

const router = express.Router();

router.get('/', async (req, res) => {
  // await Product.remove({});
  // const createdProducts = await User.insertMany(data.users);
  // res.send({ createdProducts });
});
export default router;