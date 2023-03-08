const mongoose = require("mongoose");
const{ Schema } = mongoose;

const user = new Schema({
    name: {type:String, default:null},
    email: {type: String, default:null},
    phone: {type: String, default: null},
    password: {type:String, default:null}
})

user.set('toJSON');
user.set('toObject');

module.exports = mongoose.model('user', user);