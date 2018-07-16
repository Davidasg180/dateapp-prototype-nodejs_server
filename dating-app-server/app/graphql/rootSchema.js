const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');
const { userLogIn, userSignIn } = require(`./objects/auth.obj`);
const users = require(`./objects/user.obj`);
const dates = require('./objects/date.obj');
const { point, points } = require(`./objects/point.obj`);

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: `Query`,
        fields: {
            dates,
            users,
            points
        }
    }),
    mutation: new GraphQLObjectType({
        name: `Mutation`,
        fields: {
            userLogIn,
            userSignIn,
            point
        }
    })
});

module.exports = schema;