const graphql = require('graphql');
const starWarsCharacters = require('./starWarsCharacters');

const schema = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: `Query`,
        fields: {
            starWarsCharacters
        }
    })
});

module.exports = schema;