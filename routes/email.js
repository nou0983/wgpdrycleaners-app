const express = require('express');
const router = express.Router();
const helpers = require('../helpers/email');

// @route   POST api/email
// @desc    Send an email to a designated email address
// @access  Public
router.post('/', helpers.sendEmail);

module.exports = router;
