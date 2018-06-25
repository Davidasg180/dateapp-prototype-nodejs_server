require('./config');
require('./helpers');

const express = require('express');
const mongoose = require('mongoose');
const express_graph = require('express-graphql');
const { buildSchema } = require('graphql');
const middleware = require('./middleware');

const models = require('./models');
const schema = require('./graphql');
const routes = require('./routes');

const app = express();

app.use(middleware);

app.use('/', routes);

let rootValue = {
    message: () => middleware
};

app.use('/graphiql', express_graph({
    schema,
    pretty: true,
    graphiql: true
}));

module.exports = app;