// Import of Express
const express = require('express');

// Route of user
const router = express.Router();

const userCtrl = require('../controllers/user');

// Routes of user
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);


// Export of route
module.exports = router;