//Import of package jwt to create tokens
const jwt = require('jsonwebtoken');

//Export of middleware 
module.exports = (req, res, next) => {
    // verification of data
    try {
        // Extraction of token from header
        const token = req.headers.authorization.split(' ')[1]; 
        // Decode the token
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET'); 
        // Extraction of user id from token
        const userId = decodedToken.userId; 
        // verification of user id is the same as the one in the request
        if (req.body.userId && req.body.userId !== userId) {
            // If not the same, error message
            throw 'user Id is not valid';
        } else {
            // If the same, next
            next();
        }
    } catch {
        // After 4 attempts, error message 402
        res.status(402).json({
            error: new Error('Invalid request!')
        });
    }
};