const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');
const { userLogIn, userSignIn } = require(`./objects/auth.obj`);
const users  = require(`./objects/user.obj`);

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: `Query`,
        fields: {
            users
        }
    }),
    mutation: new GraphQLObjectType({
        name: `Mutation`,
        fields: {
            userLogIn,
            userSignIn
        }
    })
});

module.exports = schema;