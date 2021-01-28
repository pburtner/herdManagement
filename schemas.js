const BaseJoi = require('joi');
const sanitizeHtml = require('sanitize-html');

const extension = (joi) => ({
    type: 'string',
    base: joi.string(),
    messages: {
        'string.escapeHTML': '{{#label}} must not include HTML'
    },
    rules: {
        escapeHTML: {
            validate(value, helpers) {
                const clean = sanitizeHtml(value, {
                    allowedTags: [],
                    allowedAttributes: {},
                });
                if (clean !== value) return helpers.error('string.escapeHTML', { value })
                return clean;
 
            }
        }
    }
})

const Joi = BaseJoi.extend(extension);

module.exports.horseSchema = Joi.object({
    horse: Joi.object({
        name: Joi.string().required().escapeHTML(),
        registeredName: Joi.string(),
        birthYear: Joi.number().required().min(1990),
        breed: Joi.string().required().escapeHTML(),
        gender: Joi.string().required().escapeHTML()
    })
})