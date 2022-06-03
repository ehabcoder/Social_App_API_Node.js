const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const mongoose = require("mongoose");

const postsRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');

const app = express();


mongoose.connect('mongodb+srv://ehabcoder:'+ process.env.MONGO_PASSWORD +'@cluster0.r4ows.mongodb.net/socialApp?retryWrites=true&w=majority')
.then(() => console.log('Connected to database')).catch(err => console.log('Error connecting to database ', err));

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(bodyParser.json());
app.use(cors(corsOptions))
app.use("/images", express.static(path.join("backend/images")));

app.use(express.static('directoryName'))
app.use('/api/posts', postsRoutes);
app.use('/api/user', userRoutes)

module.exports = app;
