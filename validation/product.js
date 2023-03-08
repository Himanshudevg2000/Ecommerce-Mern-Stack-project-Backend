const Joi = require('joi');

exports.product = Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.string().required(),
    category: Joi.string().required(),
    userId: Joi.string().required(),
    company: Joi.string().required(),
});
