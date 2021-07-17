const Joi = require('joi');

const locationModel = Joi.object({
    id: Joi.number(),
    userId: Joi.number(),
    longitude: Joi.string().required(),
    latitude: Joi.string().required(),
    timestamp: Joi.date().timestamp().required()
});

module.exports = locationModel;