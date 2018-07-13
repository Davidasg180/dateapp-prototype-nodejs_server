const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

var PointSchema = new Schema({
    type: {
        type: String,
        enum: [`point`],
        required: true
    },
    coordinates: {
        type: [Number],
        default: [0, 0],
        required: true
    }
});

module.exports = mongoose.model(`Point`, PointSchema);