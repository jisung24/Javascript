'use strict';
const express = require('express');
const app = express();

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/index', async(req,res) => {
    // data를 보내는 코드는 html, js에서만 짜주고, 
    // 여기는 res로만...!! 
    res.status(200).render('index.ejs');
})

app.get('/data', async(req,res) => {
    console.log(req.query); // 프론트에서 req.query 객체에 담아서 data를 보냄. 
})
app.listen(3000, async() => console.log('listening on port 3000'))
