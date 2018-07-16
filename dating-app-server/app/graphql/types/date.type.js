const { GraphQLObjectType, GraphQLString } = require('graphql');
const userType = require('./user.type');

let dateType = new GraphQLObjectType({
    name: 'date',
    fields: {
        _id: { type: GraphQLString },
        provider: { type: userType },
        client: { type: userType },
        status: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
    },

});

module.exports = dateType;