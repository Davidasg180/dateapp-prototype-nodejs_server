const { GraphQLObjectType, GraphQLString } = require('graphql');

let userType = new GraphQLObjectType({
    name: 'user',
    fields: {
        _id: { type: GraphQLString },
        email: { type: GraphQLString },
        password: {
            type: GraphQLString,
            resolve: () => null
        },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        gender: { type: GraphQLString },
    },

});

module.exports = userType;