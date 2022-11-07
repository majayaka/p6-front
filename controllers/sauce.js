const Sauce = require('../models/sauce');

// Controller of the route POST (create one sauce)
exports.createSauce = (req, res, next) => {
    delete req.body._id;
    const sauce = new Sauce({
        ...req.body
    });
    user.save()
        .then(() => res.status(201).json({ message: 'New sauce has been created !'}))
        .catch(error => res.status(400).json({ error }));
}

// Controller of the route PUT (modify sauce and update it)
exports.modifySauce = (req, res, next) => {
    Sauce.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Sauce has been modified !'}))
        .catch(error => res.status(400).json({ error }));
}

// Controller of the route PUT (delete one sauce)
exports.deleteSauce = (req, res, next) => {
    Sauce.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Sauce has been deleted !'}))
        .catch(error => res.status(400).json({ error }));
}

// Controller of the route GET (retrive one particular sauce)
exports.getOneSauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
        .then(sauce => res.status(200).json(sauce))
        .catch(error => res.status(404).json({ error }));
}

// Controller of the route GET (retrive all sauces)
exports.getAllSauces = (req, res, next) => {
    Sauce.find()
        .then(sauces => res.status(200).json(sauces))
        .catch(error => res.status(400).json({ error }));
}




