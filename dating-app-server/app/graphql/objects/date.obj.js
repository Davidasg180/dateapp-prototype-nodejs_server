const { GraphQLObjectType, GraphQLList, GraphQLString } = require(`graphql`);
const dateType = require(`./../types/date.type`);

const Models = require(`./../../models`);

createDate = {
    type: new GraphQLList(dateType),
    resolve: (root, args, context) => {

        Models.User.findOne().exec((error, userProvider) => {
            Models.User.findOne().exec((error, userClient) => {
                var date = {
                    provider: userProvider,
                    client: userClient
                };
                Models.Date.create(date).then((error, date) => {
                    return date;
                });
            });
        });
    }
}

dates = {
    type: new GraphQLList(dateType),
    resolve: (root, args, context) => {
        return Models.Date.find().populate('client').populate('provider');

    }
}

module.exports = dates;