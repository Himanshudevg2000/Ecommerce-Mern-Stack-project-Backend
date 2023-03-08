const { toLower, size } = require('lodash');
const { user } = require('../models');
const utils = require('../utils/apihelper')

exports.signup = async(req,res)=> {
    const pararms = req.body;
    const data = await user.find()
    for(let i=0;i<data.length;i++){
        // console.log(data[i].email)
        if(data[i].email === pararms.email || data[i].phone === pararms.phone){
            return res.status(500).send('This Email or Phone Number is already registered with us.')
        }
    }
    await utils.saveData(user, pararms);
    const result = {
        id: data._id,
        name: data.name,
        email: data.email,
        phone: data.phone
    }
    return res.status(200).send({message:'signed up successfully', result:result});
};

exports.login = async(req,res)=> {
    const pararms = req.body;
    const data = await user.findOne({email: pararms.email});

    console.log(pararms)
    console.log(data)
    if(data){
        if(pararms.email === data.email){
            if(pararms.password === data.password){
                let result = {
                    id: data._id,
                    name: data.name,
                    email: data.email,
                    phone: data.phone
                }
            return res.status(200).json({message:"login successfully",data:result})
        }
        else{
            return res.status(500).json({message:"password is wrong"})
            }
        }
    }
    else{
        return res.status(200).json({message:"email is wrong"})
    }
};