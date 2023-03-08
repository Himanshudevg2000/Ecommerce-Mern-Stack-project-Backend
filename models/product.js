const mongoose = require("mongoose");
const{ Schema } = mongoose;

const product = new Schema({
    name: {type:String, default:null},
    price: {type: String, default:null},
    category: {type: String, default: null},
    userId: { type: Schema.Types.ObjectId, ref: "user" },
    company: {type:String, default:null},
})

product.set('toJSON');
product.set('toObject');

module.exports = mongoose.model('product', product);