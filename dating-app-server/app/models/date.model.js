const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

let dateSchema = new Schema({
    //_userOne: Schema.Types.ObjectId,
    //_userTwo: Schema.Types.ObjectId,
    
    //_place: Schema.Types.ObjectId
    name: {
        type: String
    }
});

module.exports = mongoose.model('Date', dateSchema);