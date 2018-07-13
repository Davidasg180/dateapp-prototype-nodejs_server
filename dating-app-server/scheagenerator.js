const MTGQL = require(`mongoose-schema-to-graphql`);
const mongoose = require(`mongoose`);
const util = require('util');
let selectObj = {
    value: String,
    label: String
};

let answerSchema = mongoose.Schema({
    createdAt: mongoose.Schema.Types.Date,
    updatedAt: mongoose.Schema.Types.Date,
    title: String,
    answersImage: String,
    recommended: [selectObj],
    isPublished: Boolean
});

let questionSchema = mongoose.Schema({
    question: String,
    defRecommended: [selectObj],
    createdAt: mongoose.Schema.Types.Date,
    updatedAt: mongoose.Schema.Types.Date,
    isPublished: Boolean,
    multipleChoice: Boolean,
    answers: [answerSchema]
});

let config = {
  name: 'questionType',
  description: 'Question collection\'s type',
  class: 'GraphQLObjectType',
  schema: questionSchema,
  exclude: ['_id']
};

module.exports = MTGQL(config);