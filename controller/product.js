const { product } = require('../models');
const utils = require('../utils/apihelper')

exports.addProduct = async (req, res) => {
    const pararms = req.body;
    const data = await utils.saveData(product, pararms);
    return res.status(200).send({ message: "product added", data: data });
};

exports.getProducts = async (req, res) => {
    const data = await product.find();
    console.log(data);
    if (data.length > 0) {
        return res.status(200).send({ data: data, message: "All products" })
    }
    else {
        return res.status(500).send("no data found");
    }
};

exports.getProductByUserId = async (req, res) => {
    const pararms = req.query;
    const data = await product.find({ userId: pararms.userId });
    return res.status(200).send({ data: data, message: "All products" })
};

exports.getProductById = async (req, res) => {
    // const pararms = req.query;
    const pararms = req.params.id;
    console.log(pararms)
    const data = await product.find({ _id: pararms });
    if (data.length != 0) {
        return res.status(200).send({ data: data, message: "All products" })
    }
    else {
        return res.status(500).send("no data found");
    }
};


exports.deleteProduct = async (req, res) => {
    const pararms = req.query.id;
    const data = await product.findByIdAndRemove(pararms);
    // const data = await product.deleteOne({id:pararms});
    return res.status(200).send({ message: "successfully deleted", data: data })
};

exports.updateProduct = async (req, res) => {
    const pararms = req.body;
    const data = await product.findByIdAndUpdate(req.query.id, pararms);
    if (data) {
        return res.status(200).send({ message: "successfully updated", data: data })
    }
    else {
        return res.status(500).send("no data to update");
    }
};

exports.searchField = async (req, res) => {
    try {
        const pararms = req.params;
        const data = await product.find({
            "$or": [
                { name: { $regex: pararms.key } },
                { price: { $regex: pararms.key } },
                { category: { $regex: pararms.key } },
                { company: { $regex: pararms.key } },
            ]
        }).populate('userId',['name'])
        // console.log(pararms.name)
        console.log(data);
        return res.status(200).send({message:"success",data:data});
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({message:"error occured"})
    }
}