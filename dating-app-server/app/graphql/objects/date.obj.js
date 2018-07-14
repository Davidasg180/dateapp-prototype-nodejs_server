const { GraphQLObjectType, GraphQLString } = require(`graphql`);

date = {
    type: new GraphQLObjectType({
        name: 'date',
        fields: {
            providerUser: user,
            clientUser: user,
            place: place,
            status: "",
            createdAt: new Date()
        }
    }),

    args: {

    },

    resolve: (root, args) => {
        return
    }
};

module.exports = {
    date
};