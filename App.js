var express = require('express');

var userController = require('./usercontroller.js');

var mongoose = require('mongoose');

// Initializing express Object
var app = express();
app.use(express.json())


// Connecting to Database
const dbURI = "mongodb://localhost/myDb"
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

// Start writing Routes here.

app.get('/user', userController.getAllUsers)
app.get('/user/:id', userController.getUserById)
app.post('/user', userController.addUser)
app.put('/user/:id', userController.updateUser)
app.delete('/user/:id', userController.deleteUserById)
// Starts Listening on port 9000
app.listen(9000)
console.log('Server listening on port : 9000')