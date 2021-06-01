function log(str) {
    console.log(str)
}
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv').config()

const routes = require('./routes/index.js')

// console.log(dotenv.parsed)

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

app.use(routes)

app.listen(3330, () => console.log('running server...'))