import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
dotenv.config()
const app = express()
const PORT = process.env.PORT || 8000
const URL = process.env.MONGO_URI

app.use(bodyParser.json())
app.use(cors())

mongoose.connect(URL).then(() => {
    console.log('connected')
    app.listen(PORT, () => {
        console.log(`running on http://localhost:${PORT}`);
    })
}).catch(err => console.log(err.message))


