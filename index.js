const express = require('express')
const user = require('./routeCompo/route')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const app = express()

app.use(
    cors({
        origin:'*'
    })
)
const port = process.env.port
app.use(express.json()) // bodyparcer

app.use('/user' , user)

app.listen(port, () => {
    console.log(`server is running in port ${port}`)
})