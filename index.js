require('dotenv').config();

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));

app.use(express.urlencoded({extended:true}));

const router = require('./app/router');
app.use(router);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on port : ${process.env.PORT}`);
});