// Import of Express
const express = require('express');

// Route of user
const router = express.Router();

// Assignation of controllers
const userCtrl = require('../controllers/user');

// Definition of routes of 'signup' and 'login'
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

// Export of router
module.exports = router;