import React, { Component } from 'react';
import {
    Route,
    Switch,
    BrowserRouter as Router
} from 'react-router-dom';

import SideBar from './components/SideBar';
import MapView from './views/MapView';

import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="App">
                        <SideBar />
                    </div>
                    <Switch>
                        <Route
                            path='/map'
                            component={MapView}
                        />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;