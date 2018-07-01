import React, { Component } from 'react';
import {
    Link,
    Route,
    Switch,
    BrowserRouter as Router
} from 'react-router-dom'

import MapView from './views/MapView';

import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <ul>
                        <li><Link to="/map">Map</Link></li>
                    </ul>
                    <Switch>
                        <Route
                            path="/map"
                            component="MapView"
                        />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
