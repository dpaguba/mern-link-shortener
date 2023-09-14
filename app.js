// conn package
const express = require('express')

// server
const app = express()

// firsrt param is port, second is callback
// not best practice
app.listen(5000, ()=>{
    console.log("App has been started");
})