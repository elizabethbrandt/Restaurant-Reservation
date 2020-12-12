/// Create a basic server using Express.JS ///
const express = require('express')
const app = express()

const PORT = 3000

/// Create a few array variables that will hold the data ///
const dataArray = []

/// Create a set of routes for getting and posting table data ///
app.get('/table', function (req, res) {
    res.send('TABLE')
})
app.post('/table', function (req, res) {
    const tableData = {}
    res.json(tableData)
})

/// Create a set of routes for displaying the HTML pages ///
app.get('/', function (req, res) {
    res.send('HOME')
})

app.listen(PORT)