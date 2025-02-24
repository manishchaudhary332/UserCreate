const express = require('express');
const app  = express();
const router = require('./routes/index.routes')
const path = require('path')


app.set('view engine','ejs')
app.set("views","src/views")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// app.use( express.static(path.join(__dirname, 'src')));


app.use('/',router)

module.exports = app;