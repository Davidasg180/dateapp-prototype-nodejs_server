const { GraphQLObjectType, GraphQLList, GraphQLString } = require(`graphql`);
const userType = require(`./../types/user.type`);

const User = require(`./../../models`).User;

users = {
    type: new GraphQLList(userType),

    args: {
        email: {
            type: GraphQLString
        },
        password: {
            type: GraphQLString
        },
    },

    resolve: (root, args) => {
        return User.find();
    }
}


module.exports = users;