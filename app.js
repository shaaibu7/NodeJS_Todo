const express = require('express')

const PORT = 3000;

//templating engine
app.set('view engine', 'ejs');

// application
const app = express();

//listening to server
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})