const express = require('express')
const app = express()
let { people } = require('./data')
const path = require('path')

app.use(express.static('./methods-public'))
app.use(express.urlencoded({ extended: false }))

app.post('/login', (req, res) => {
    res.send('POST request to the homepage')
})

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/people">people</a>')
})

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

app.listen(5000, () => {
    console.log('server is listening on port 5000....')
})