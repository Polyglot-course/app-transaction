require('dotenv').config()
const express = require('express')
const app = express()

const PORT = process.env.SERVER_PORT_TRANSACTION || 3003

app.use(express.json())
app.use('/api', require('./src/app/routes'))

app.listen(PORT, () => {
    console.log('Application running on port ', PORT)
})


