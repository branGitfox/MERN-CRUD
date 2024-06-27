import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import route from './routers/userRouter.js'

const app = express()
app.use(bodyParser.json())
app.use(cors())
dotenv.config()
const PORT = process.env.PORT || 8000
const URL = process.env.MONGO_URI



mongoose.connect(URL).then(() => {
    console.log('connected')
    app.listen(PORT, () => {
        console.log(`running on http://localhost:${PORT}`);
    })
}).catch(err => console.log(err.message))

app.use('/api', route)
app.get('/', (req, res) => console.log(req.url))


