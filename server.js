const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.port || 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"))
};

app.use(routes);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/nytarticles');

app.listen(PORT, ()=> console.log(`PORT listening on http://localhost:${PORT}`) );