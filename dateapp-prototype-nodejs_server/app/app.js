require('./config');
require('./helpers');

const express = require('express');
const mongoose = require('mongoose');
const express_graph = require('express-graphql');
const { buildSchema } = require('graphql');
const middleware = require('./middleware');
const jwt = require('express-jwt');

const app = express();

app.use(middleware);

const models = require('./models');
const routes = require('./routes');

app.use('/', routes);

let schema = buildSchema(`
    type Query {
        message : String
    }
`);

let rootValue = {
    message: () => middleware
}

app.use('/Graphql', express_graph({
    schema,
    rootValue,
    graphiql: true
}))

module.exports = app;