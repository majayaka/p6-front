//Import of the mongoose package
const mongoose = require('mongoose');
//Import of the package Mongoose unique validator
const uniqueValidator = require('mongoose-unique-validator');

//Creation of the user schema
const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true}
});

//Avoiding duplicate email addresses
userSchema.plugin(uniqueValidator);

// Export of schema User
module.exports = mongoose.model('User', userSchema);