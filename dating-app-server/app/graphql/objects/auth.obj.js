const { GraphQLObjectType, GraphQLString } = require(`graphql`);
const authType = require(`../types/auth.type`);

const bcrypt = require(`bcryptjs`);
const jwt = require(`jsonwebtoken`);

const User = require(`./../../models`).User;

userLogIn = {
    type: authType,

    args: {
        email: {
            type: GraphQLString
        },
        password: {
            type: GraphQLString
        }
    },

    resolve: (root, args) => {
        return {
            token: "testtoekn",
            user: {
                email: "testemail",
                password: "testpass"
            }
        };
    }
};



userSignIn = {
    type: authType,

    args: {
        email: {
            type: GraphQLString
        },
        password: {
            type: GraphQLString
        }
    },

    resolve: (root, args) => {

        let userData = {
            email: args.email,
            password: bcrypt.hashSync(args.password, 10)
        }

        return User.create(userData).then(user => {

            let token = jwt.sign({ id: user._id }, CONFIG.jwt_encryption, {
                expiresIn: CONFIG.jwt_expiration
            });

            return {
                token,
                user
            }

        });
    }
}

module.exports = {
    userLogIn,
    userSignIn
};