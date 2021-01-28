const { horseSchema } = require('./schemas');
const ExpressError = require('./utils/ExpressError');
const Horse = require('./models/horse');

module.exports.validateHorse = (req, res, next) => {
    const { error } = horseSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
}