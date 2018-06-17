const graphql = require('graphql');

starWarsCharactersObj = {
    type: new graphql.GraphQLObjectType({
        name: 'starWarsCharacters',
        fields: {
            name: { type: graphql.GraphQLString },
            gender: { type: graphql.GraphQLString },
            url: {
                type: graphql.GraphQLString,
                resolve: (url) => console.log(url)
            }
        }
    }),
    args: {
        id: {
            type: graphql.GraphQLInt
        }
    },
    resolve: (root, args) => {
        return {
            id: '1',
            name: 'bulbasaurs',
            gender:"male",
            order: 1,
            product: "test",
            url: {
                front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            }
        };
    }
};

module.exports = starWarsCharactersObj;