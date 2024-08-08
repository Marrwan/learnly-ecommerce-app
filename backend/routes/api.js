const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User');
const Product = require('../models/Product');

const auth = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    try {
        const decoded = jwt.verify(token, 'secret');
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).send('Unauthorized, You need to login');
    }
};

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.status(201).send('User registered');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !await bcrypt.compare(password, user.password)) {
        return res.status(401).send('Invalid credentials');
    }
    const token = jwt.sign({ _id: user._id, username: user.username }, 'secret');
    res.send({ token, user });
});

router.get('/products', async (req, res) => {
    const products = await Product.find().populate('createdBy').exec();
    res.send(products);
});

router.post('/products', auth, async (req, res) => {
    const { name, description, price, imageURL } = req.body;
    console.log({user: req.user})
    const product = new Product({ name, description, price, imageURL, createdBy: req.user });
    await product.save();
    res.status(201).send(product);
});

module.exports = router;
