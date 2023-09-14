// conn package
const express = require('express')
const config = require('config')

// server
const app = express()

// constants
const PORT = config.get('port') || 5000


app.listen(PORT, ()=>{
    console.log(`App has been started onn port ${PORT}`);
})