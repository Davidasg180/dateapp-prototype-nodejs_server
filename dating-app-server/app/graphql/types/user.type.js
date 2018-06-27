const { GraphQLObjectType, GraphQLString } = require('graphql');

let userType = new GraphQLObjectType({
    name: 'user',
    fields: {
        _id: { type: GraphQLString },
        email: { type: GraphQLString },
        password: {
            type: GraphQLString,
            resolve: () => null
        }
    },

});

module.exports = userType;