const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

let offerSchema = new Schema({
    name: {
        type: String
    }
});

module.exports = mongoose.model(`Offer`,offerSchema);