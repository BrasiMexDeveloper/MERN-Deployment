
const {Store} = require('../models/store.model');
module.exports.createStore = (req, res) => {
    Store.create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))
}
module.exports.allStores = (req, res) => {
    Store.find()
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))

}
module.exports.getStore = (req, res) => {
    Store.findOne({_id: req.params.id})
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))
}
module.exports.updateStore = (req, res) => {
    Store.findOneAndUpdate({_id: req.params.id}, req.body, {new: true,runValidators: true})
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))
}
module.exports.deleteStore = (req, res) => {
    Store.deleteOne({_id: req.params.id})
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))
}

