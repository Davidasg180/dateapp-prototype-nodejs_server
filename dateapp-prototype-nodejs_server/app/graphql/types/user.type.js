const { GraphQLObjectType, GraphQLString } = require('graphql');

userType = new GraphQLObjectType({
    name: 'user',
    fields: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
    },

});

module.exports = userType;