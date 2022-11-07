const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]; // Extract the token from the header
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET'); // Decode the token
        const userId = decodedToken.userId; // Extract the user ID from the token
        req.auth ={
            userId: userId
        }
    } catch(error) {
        res.status(401).json({ error });
    }
};