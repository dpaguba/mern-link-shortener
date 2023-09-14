// conn package
const express = require('express')
const config = require('config')
const mongoose = require('mongoose');

// server
const app = express()

app.use(express.json({extended: true}))

// routes
app.use('/api/auth', require('./routes/auth.routes'))

// constants
const PORT = config.get('port') || 5000
const MONGO_URI = config.get('mongoUri')


async function start() {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`App has been started on port ${PORT}...`)
        // app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (error) {
        console.log("Server Error: ", error.message);
        process.exit(1)
    }
}

start()