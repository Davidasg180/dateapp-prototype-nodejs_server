const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

let placeSchema = new Schema({
    name: {
        type: String
    },
    location: {
        formatted_address: {
            type: String
        },
        geometry: {
            coordinates: []
        }
    },
    rating: {
        type: Number
    },
});

module.export = mongoose.model(`Place`, placeSchema);