const { GraphQLObjectType, GraphQLString } = require(`graphql`);
const user = require(`./user.type`);

authType = new GraphQLObjectType({
    name: `Auth`,
    fields: {
        token: {
            type: GraphQLString
        },
        user: {
            type:user
        }
    }
});

module.exports = authType;