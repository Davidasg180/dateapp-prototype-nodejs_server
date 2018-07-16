const { GraphQLObjectType, GraphQLString } = require('graphql');
const  userType = require('./user.type');

let placeType = new GraphQLObjectType({
    name: 'place',
    fields: {
        _id: { type: GraphQLString },
        provider: { type: userType },
        client: { type: userType },
        status: { type: GraphQLString },
    },

});

module.exports = placeType;