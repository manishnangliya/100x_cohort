const  mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;


async function connectDb(){
    try {
        await mongoose.connect(URI);
        console.log("Database connect successful");

    } catch (error) {
        console.error(error);
        process.exit(0);
    }   
}
module.exports = connectDb;