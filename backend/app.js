// Import Express
const express = require('express');
// Use Express
const app = express();
// Import Mongoose
const mongoose = require('mongoose');
// Import of the path module to define the path
const path = require('path');

// Import of routes
const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauce');

// Connection to MongoDB
mongoose.connect('mongodb+srv://ayaka:ayaka@atlascluster.ixrmsel.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// To change the request into sJSON format
app.use(express.json());

// Headers to avoid CORS errors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

// Set up routes of user
app.use('/api/auth', userRoutes);
// Set up routes of sauce
app.use('/api/sauces', sauceRoutes);
// Set up routes of images
app.use('/images', express.static(path.join(__dirname, 'images')));

// Export of the app
module.exports = app;
