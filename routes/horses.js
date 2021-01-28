const express = require('express');
const router = express.Router();
const horses = require('../controllers/horses');
const catchAsync = require('../utils/catchAsync');
const { validateHorse } = require('../middleware');
// const { isLoggedIn, validateCampground, isAuthor } = require('../middleware');
// const multer = require('multer');
// const { storage } = require('../cloudinary');
// const upload = multer({ storage });

router.route('/')
    .get(catchAsync(horses.index))
    .post(validateHorse, catchAsync(horses.createHorse));

router.get('/new', horses.renderNewForm);

router.route('/:id')
    .get(catchAsync(horses.showHorse))
    .put(validateHorse, catchAsync(horses.updateHorse))
    .delete(catchAsync(horses.deleteHorse))

router.get('/:id/edit', catchAsync(horses.renderEditForm));

module.exports = router;