const { GraphQLObjectType, GraphQLString } = require(`graphql`);
const userType = require(`./../types/user.type`);

users = {
    type: userType,

    args: {
        email: {
            type: GraphQLString
        },
        password: {
            type: GraphQLString
        },
    },

    resolve: (root, args) => {
        return {
                email: "testemail",
                password: "testpass"
        }
    }
}


module.exports = users;