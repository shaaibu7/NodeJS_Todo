const app = require('./app');
const PORT = process.env.PORT || 8000;

//listening to server
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})