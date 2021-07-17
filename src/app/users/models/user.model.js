const Joi = require("joi");

const locationModel = Joi.object({
    id: Joi.number(),
    name: Joi.string().required(),
    surname: Joi.string().required(),
    email: Joi.string().required(),
});

module.exports = locationModel;
