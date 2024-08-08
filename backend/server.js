const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log("connected to mongodb");
    }).catch(()=>{
    console.log("error connecting to mongodb");
});

// Routes
app.use('/api', require('./routes/api'));

// Start Server
let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server is running on port 5000');
});
