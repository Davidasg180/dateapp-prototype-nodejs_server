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
        console.log("Resolve: userLogIn");
        return User.findOne({ email: args.email }).then(user => {

            let passwordIsValid = bcrypt.compareSync(args.password, user.password);

            if (!passwordIsValid) throw new Error('Unavailable in your country.');

            let token = jwt.sign({ id: user._id }, CONFIG.jwt_encryption, {
                expiresIn: CONFIG.jwt_expiration
            });

            return {
                token,
                user
            }

        }).catch(e => console.log(e));
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
        },
        first_name: {
            type: GraphQLString
        },
        last_name: {
            type: GraphQLString
        },
        gender: {
            type: GraphQLString
        }
    },

    resolve: (root, args) => {

        args.password = bcrypt.hashSync(args.password, 10)

        return User.create(args).then(user => {

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