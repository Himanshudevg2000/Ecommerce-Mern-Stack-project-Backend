const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(`${process.env.NODE_ENV}.env`),
});
module.exports = {
    PORT: process.env.PORT || 5000,
    MONGODB_URI: process.env.MONGODB_URI || "mongodb+srv://himanshu:hd123@cluster0.ifoxmmi.mongodb.net/?retryWrites=true&w=majority"

};
