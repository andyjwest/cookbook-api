import express from 'express'
import {route} from './recipes/routes.mjs'

const app = express()

app.listen(8080, () => {
    console.log('Server is running on port 8080')
})

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

app.use(express.json())
app.use('/recipes', route)