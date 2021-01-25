const express = require('express');
const router = express.Router();
const horses = require('../controllers/horses');
const catchAsync = require('../utils/catchAsync');
// const { isLoggedIn, validateCampground, isAuthor } = require('../middleware');
// const multer = require('multer');
// const { storage } = require('../cloudinary');
// const upload = multer({ storage });

router.route('/')
    .get(catchAsync(horses.index))

router.get('/new', horses.renderNewForm)

module.exports = router;