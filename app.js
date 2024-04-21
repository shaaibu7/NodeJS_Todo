const express = require('express')
const mongoose = require('mongoose')

// application
const app = express();

const connectionUrl = 'mongodb://localhost:27017/todoDb';

mongoose.connect(connectionUrl)
    .then(() => {
        console.log("connection to database successful")
    })
    .catch((error) => {
        console.log(error.message)
    })

const PORT = 3000;

//templating engine
app.set('view engine', 'ejs');


//listening to server
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})