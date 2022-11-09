// Import of users in models
const User = require('../models/user');

// Import of bcrypt to hash the password
const bcrypt = require('bcrypt');
// Import of the authentication token
const jwt = require('jsonwebtoken');

// Export of "signup" and "login" function
exports.signup = (req, res, next) => {
    // Hash the password
    bcrypt.hash(req.body.password, 10)
        // Creation of Promise
        .then(hash => {
            // Collect the user email and hashed password
            const user = new User({
                email: req.body.email,
                password: hash
            });
            // Save the user in the database
            user.save()
                .then(() => res.status(201).json({
                    // response of success 201
                     message: 'New user has been created !'
                    }))
                .catch(error => res.status(400).json({
                    // response of error 400
                     error 
                    }));
        })
        .catch(error => res.status(500).json({
            // response of error 500
            error 
        }));
};

exports.login = (req, res, next) => {
    // Method 'fineOne' to find the particular user in the database
    User.findOne({ 
        email: req.body.email 
    })
    // function Promise
    .then(user => {
      if (!user) {
        return res.status(401).json({
            // response of error 401 
            error: 'The user not found !'
        });
    }
     // Compare the typed password and with the one in the database
     bcrypt.compare(req.body.password, user.password)
        .then(valid => {
            // If the password is valid or not
            if (!valid) {
              return res.status(401).json({
                // response of error 401
                 error: 'This password is incorrect!'
             });
            }
            // response of success 200
            res.status(200).json({
            // send the user ID and the authentication token to the FE
            userId: user._id,
            // encode with function 'sign' the user ID and a random string
            token: jwt.sign({
                userId: user._id 
            },
            // 
            'RANDOM_TOKEN_SECRET', {
                expiresIn: '24h'
            }
         )
        });
    }) 
    .catch (error => res.status(500).json({
        // response of error 500
         error 
        }));
    });
};
