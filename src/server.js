
const express = require('express')
const {join} = require("node:path"); // commonjs
// import express from 'express'; // es modules

const app = express() // app express
const port = 3000 // khai bao port

// config template engine
app.set('views', join( __dirname, 'views') )
app.set('view engine', 'ejs')

// khi bao route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/thanh', (req, res) => {
    // res.send('<h1>Thanh!</h1>')
    // gọi đến file ejs
    res.render('sample.ejs')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
