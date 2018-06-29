const { Schema, Model } = require(`mongoose`);

let dateSchema = Schema({
    _userOne: Schema.Types.ObjectId,
    _userTwo: Schema.Types.ObjectId,
    
    _place: Schema.Types.ObjectId
});

module.exports = model('Date', dateSchema);