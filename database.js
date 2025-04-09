const { default: mongoose } = require('mongoose');

// import dotenv
require ('dotenv').config();

// create uri using dotenv variables
const dbUser = process.env.MIND_MINGLE_CLUSTER_USERNAME;
const dbPassword = process.env.MIND_MINGLE_CLUSTER_PASSWORD;
const uri = `mongodb+srv://${dbUser}:${dbPassword}@mind-mingle-dev.uenuhhz.mongodb.net/`;

// connect to database
const connectToDb = async () => {
    try {
        mongoose.connect(uri);
        console.log("Connected to Database!");
    } catch (error){
        console.error('There was a problem connecting to the database', error);
        process.exit(1);
    }
}

module.exports = connectToDb;

