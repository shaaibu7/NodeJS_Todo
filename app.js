const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

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

const PORT = 8000;

//templating engine
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res, next) => {
    try {
        res.render('index', { title: "List Todo" });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.get('/add-todo', (req, res, next) => {
    try {
        res.render('newTodo', { title: "New Todo" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.get('/update-todo', (req, res, next) => {
    try {
        res.render('updateTodo', { title: "Update Todo" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.get('/delete-todo', (req, res, next) => {
    try {
        res.render('deleteTodo', { title: "Delete Todo" })
    } catch (error) {
        res.status(500).json({ message: message.error })
    }
})

//listening to server
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})