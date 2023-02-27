const mongoose = require('mongoose');
const storeSchema = new mongoose.Schema({
    store: {
        type: String,
        required:[true, '{PATH} is required'],
        minlength:[3, '{PATH} Name must be at least 3 characters long'],
    },
    storeNumber: {
        type: Number,
        required:[true, 'Please enter the store number'],
        min:[1, 'Must be a number grater than 0']
    },
    isOpen:{
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
});
module.exports.Store = mongoose.model('Store', storeSchema);
