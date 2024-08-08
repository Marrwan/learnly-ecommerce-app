const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
// Middleware
app.use(express.json());
app.use(cors());
let MONGODB_URI = process.env.MONGODB_URI;
// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log("connected to mongodb at localhost:" + MONGODB_URI);
    }).catch((e)=>{
    console.log("error connecting to mongodb", e);
});

// Routes
app.use('/api', require('./routes/api'));

// Start Server
let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server is running on port 5000');
});
