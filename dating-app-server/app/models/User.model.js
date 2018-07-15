const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('User', UserSchema);