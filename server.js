/// Create a basic server using Express.JS ///
var path = require("path")

const express = require('express')
const app = express()

const PORT = 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/// Create a few array variables that will hold the data ///
let reservations = [{
    name: 'Mark Smith',
    phone: '2535557890',
    email: 'msmith@hoxs.com',
    id: '24562'
}, {
    name: 'Mary Williams',
    phone: '2535557890',
    email: 'msmith@hoxs.com',
    id: '24563'
}, {
    name: 'Laura Gold',
    phone: '2535557890',
    email: 'msmith@hoxs.com',
    id: '24564'
}, {
    name: 'Rayla Li',
    phone: '2535557890',
    email: 'msmith@hoxs.com',
    id: '24565'
}, {
    name: 'Katherine Xiong',
    phone: '2537978029',
    email: 'post.katherine@gmail.com',
    id: '254632'
}]
let waitlist = [{
    name: 'Rayla Li',
    phone: '2345324555',
    email: 'post.makai@gmail.com',
    id: 'gfdsgdsfg'
}, { 
    name: 'Ada Lovelace', 
    phone: '1234567898', 
    email: '', 
    id: '25425' 
}]

/// Create a set of routes for getting and posting table data ///
app.get('/api/reservations', function (req, res) {
    res.json(reservations)
})
app.get('/api/waitlist', function (req, res) {
    res.json(waitlist)
})
app.get('/api/tables', function (req, res) {
    res.json({ reservations, waitlist })
})

/// Create a set of routes for displaying the HTML pages ///
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "lib/index.html"));
})

app.get('/tables', function (req, res) {
    res.sendFile(path.join(__dirname, "lib/tables.html"));
})

app.post('/clear-tables', function (req, res) {
    reservations = []
    waitlist = []
})

app.get('/reserve', function (req, res) {
    res.sendFile(path.join(__dirname, "lib/reserve.html"));
})
app.post('/reserve', function (req, res) {
    console.log('A reservation was just made.');
    const data = req.body
    console.log(data);

    if (reservations.length < 5) {
        reservations.push(data)
    } else {
        waitlist.push(data)
    }

    res.json({ reservations, waitlist })
})

app.listen(PORT)