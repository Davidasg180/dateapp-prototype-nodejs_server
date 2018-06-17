const graphql = require('graphql');
const starWarsCharacters = require('./starWarsCharacters');

const schema = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: `Query`,
        fields: {
            myNewField: {
                type: graphql.String,
                resolve: function () {
                    return 'Hello world!';
                }
            }
        }
    })
});

module.exports = schema;