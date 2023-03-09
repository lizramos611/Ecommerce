const routes = require('./routes');
const express = require('express');
const sequalize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express/JSON());
app.use(express.urlencoded({extended:true}));
app.use(routes);


