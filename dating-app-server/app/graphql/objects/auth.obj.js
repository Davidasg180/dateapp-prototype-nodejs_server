const { GraphQLObjectType, GraphQLString } = require(`graphql`);
const authType = require(`../types/auth.type`);
const bcrypt = require(`bcryptjs`);

const User = require(`./../../models`).User;

userLogIn = {
    type: authType,

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
            token: "testtoekn",
            user: {
                email: "testemail",
                password: "testpass"
            }
        }
    }
}



userSignIn = {
    type: authType,

    args: {
        email: {
            type: GraphQLString
        },
        password: {
            type: GraphQLString
        },
    },

    resolve: (root, args) => {
        let userData = {
            email: args.email,
            password: bcrypt.hashSync(args.password, 8)
        }

        user = User.create(userData);

        return {
            token: "dksjakldjqwjdas",
            user
        }

        
    }
}

module.exports = {
    userLogIn,
    userSignIn
};