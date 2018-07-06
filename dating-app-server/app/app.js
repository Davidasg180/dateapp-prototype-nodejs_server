require('./config');
require('./helpers');

const path = require(`path`);

const express = require('express');
const mongoose = require('mongoose');
const express_graph = require('express-graphql');
const { buildSchema, graphqlHTTP } = require('graphql');

const middleware = require('./middleware');

const models = require('./models');
const schema = require('./graphql');

const routes = require('./routes');

const app = express();

app.use(middleware);
app.use(express.static(path.join(__dirname, 'public')));


// catch 404 and forward to error handler
//app.use(function (req, res, next) {
//    var err = new Error('Not Found');
//    err.status = 404;
//    next(err);
//});

let rootValue = {
    message: () => middleware
};

app.use('/graphiql', express_graph(request => ({
    schema,
    context: {
        request,
        test: 'Example context value'
    },
    pretty: true,
    graphiql: true
})));

app.use(`/api`, express_graph(request => ({
            schema,
            context: {
                request
            }
        })
    )
)

app.use('/', routes);

module.exports = app;