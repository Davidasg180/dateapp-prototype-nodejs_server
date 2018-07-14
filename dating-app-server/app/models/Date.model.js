const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

let DateSchema = new Schema({
    providerUser: { type: Schema.Types.ObjectId, ref: 'User' },
    clientUser: { type: Schema.Types.ObjectId, ref: 'User' },
    status: String,
}, { timestamps: true });

module.exports = mongoose.model('Date', DateSchema);