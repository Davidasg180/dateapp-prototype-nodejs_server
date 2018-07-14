const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

let DateSchema = new Schema({
    providerUser: { type: Schema.Types.ObjectId, ref: 'User' },
    clientUser: { type: Schema.Types.ObjectId, ref: 'User' },
    status: String,
});

module.exports = mongoose.model('Date', DateSchema);