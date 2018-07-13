const { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLFloat } = require(`graphql`);
const pointType = require(`./../types/point.type`);

const Point = require(`./../../models`).Point;

let point = {
    type: pointType,
    args: {
        type: {
            type: GraphQLString
        },
        coordinates: {
            type: new GraphQLList(GraphQLFloat)
        }
    },

    resolve: (root, args, context) => {
        return Point.create(args);
    }
}

let points = {
    type: GraphQLList(pointType),

    resolve: (root, args, context) => {
        return Point.find();
    }
}

module.exports = { point, points };