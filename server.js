const express = require('express')
const app = express()
const PORT = 3000

// const MongoClient = require('mongodb').MongoClient
// require('dotenv').config()


// let db,
//     dbConnectionStr = process.env.DB_STRING,
//     dbName = 'todo'

// MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
//     .then(client => {
//         console.log(`Connected to ${dbName} Database`)
//         db = client.db(dbName)
//     })

app.set('view engine', 'ejs')
app.use(express.static('public'))
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/network-reg', (req, res) => {
    res.render('network-reg')
})

app.listen(PORT || process.env.PORT, () => {
    console.log('Server running on PORT 3000');
})