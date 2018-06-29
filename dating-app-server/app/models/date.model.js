const { Schema, Model } = require(`mongoose`);

let dateSchema = Schema({
    _place: Schema.Types.ObjectId
});

module.exports = model('Date', dateSchema);