// Import of Express
const express = require('express');
// Creating router
const router = express.Router();

// Import of controllers
const sauceCtrl = require('../controllers/sauce');

// Import of Middleware 'auth' and 'Multer'
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// Define the Routes for the Sauce
router.post('/', auth, multer, sauceCtrl.createSauce);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.get('/', auth, sauceCtrl.getAllSauces);
router.post('/:id/like', auth, sauceCtrl.createLike);


// Export of router
module.exports = router;