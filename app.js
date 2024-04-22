const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const connectMongodb = require('./init/mongodb');
const todoRoute = require('./routes/todo')

// application
const app = express();

//mongodb connection
connectMongodb();

    
const PORT = 8000;

//templating engine
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', todoRoute);



//listening to server
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})