require('dotenv').config()
const express = require('express')
const db = require('./config/mongoose')
const PORT = 8000
const app = express()


console.log(process.env.DB_URL)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', require('./routes'))

db.then(() => {

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })

}) 