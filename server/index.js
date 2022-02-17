require('dotenv').config();
const cors = require('cors');

const port = process.env.PORT || 6262;

const express = require('express')
const mongoose = require('mongoose');


const app = express()

mongoose.connect(process.env.DATABASE_CONNECTION_URL, {
    useNewUrlParser: true
})

const db = mongoose.connection;

db.on('error', (errr) => {
    console.log('xxxxxSERVERxxxxx')
    console.error(errr)
})
db.once('open', () => {
    console.log('====SERVER====\nDatabase connected.')
})

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Nabasa by Paul Christian')
})
app.post('/', (req, res) => {
    res.send('Nu-uh-uh, nothing to post here.')
})

const accountsRouter = require('./routes/accounts')
app.use('/account', accountsRouter);

app.listen(port , () => {
    console.log(`+++++PORT:${port}+++++`)
})