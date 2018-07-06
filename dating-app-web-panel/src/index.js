import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import { BrowserRouter, } from 'react-router-dom';

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: "/api"
});

ReactDOM.render(<BrowserRouter><ApolloProvider client={client}><App /></ApolloProvider></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
