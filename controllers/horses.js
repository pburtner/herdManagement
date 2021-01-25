const Horse = require('../models/horse');

module.exports.index = async (req, res) => {
    const horses = await Horse.find();
    res.render('horses.index', { horses });
};

module.exports.renderNewForm = (req, res) => {
    res.render('campgrounds/new');
};

