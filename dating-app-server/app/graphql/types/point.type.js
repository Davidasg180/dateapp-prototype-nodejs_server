const { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLFloat } = require(`graphql`);

pointType = new GraphQLObjectType({
    name: `Point`,
    fields: {
        type: {
            type: GraphQLString
        },
        coordinates: {
            type:  new GraphQLList(GraphQLFloat)
        }
    }
});

module.exports = pointType;