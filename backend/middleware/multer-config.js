// Import of package multer
const multer = require('multer');

// Types of files accepted
const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

// Configuration of multer
const storage = multer.diskStorage({
    // Destination of files of images
    destination: (req, file, callback) => {
        callback(null, 'images');
    },
    filename: (req, file, callback) => {
        // to give a unique name of images
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);
    }
});

// Export of middleware
module.exports = multer({
     storage: storage 
    }).single('image');  // this single() creates a middleware 
    //that captures files of a certain type (passed as an argument), 
    //and saves them to the server file system using the configured storage.
