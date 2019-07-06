require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const authCtrl = require('./authCtrl')


const { SERVER_PORT, CONNECTION_STRING, SECRET } = process.env

const app = express()

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => {
        console.log(`Listening on port: ${SERVER_PORT}`)
    })
})

app.use(express.json())
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use( express.static( `${__dirname}/../build`))

app.get('/api/landing', authCtrl.landing)