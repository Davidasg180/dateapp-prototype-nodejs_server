const { Schema } = require(`mongoose`);

let placeSchema = Schema({
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