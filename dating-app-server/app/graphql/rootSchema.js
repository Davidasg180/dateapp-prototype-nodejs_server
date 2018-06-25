const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');
const { userLogIn, userSignIn } = require(`./objects/auth.obj`);
const users  = require(`./objects/user.obj`);

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: `Query`,
        fields: {
            userLogIn,
            users
        }
    }),
    mutation: new GraphQLObjectType({
        name: `Mutation`,
        fields: {
            userSignIn
        }
    })
});

module.exports = schema;