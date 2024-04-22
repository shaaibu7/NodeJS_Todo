const mongoose = require('mongoose');


const connectionMongodb = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_URL)
        console.log('Database connection successful');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

module.exports = connectionMongodb;