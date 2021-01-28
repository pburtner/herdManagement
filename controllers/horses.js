const Horse = require('../models/horse');
const { request } = require('express');

module.exports.index = async (req, res) => {
    const horses = await Horse.find();
    res.render('horses/index', { horses });
};

module.exports.renderNewForm = (req, res) => {
    res.render('horses/new');
};

module.exports.createHorse = async (req, res, next) => {
    const horse = new Horse(req.body.horse);
    await horse.save();
    req.flash('success', `Successfully added ${horse.name} to the herd`);
    res.redirect(`/horses/${horse._id}`)
}

module.exports.showHorse = async (req, res) => {
    const horse = await Horse.findById(req.params.id);
    if (!horse) {
        req.flash('error', 'Cannot find that horse');
        return res.redirect('/horses');
    }
    res.render('horses/show', { horse });
}

module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const horse = await Horse.findById(id);
        if (!horse) {
        req.flash('error', 'Cannot find that horse');
        return res.redirect('/horses');
    }
    res.render('horses/edit', { horse });
}

module.exports.updateHorse = async (req, res) => {
    console.log("Update horse called");
    const { id } = req.params;
    const horse = await Horse.findByIdAndUpdate(id, { ...req.body.horse });
    req.flash('success', `Successfully updated ${horse.name}`);
    res.redirect(`/horses/${horse._id}`);
}

module.exports.deleteHorse = async (req, res) => {
    const { id } = req.params;
    await Horse.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted horse');
    res.redirect('/horses');
}