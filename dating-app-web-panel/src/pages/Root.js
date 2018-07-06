import React, { Component } from 'react';

import {
    Switch,
    Route
} from "react-router-dom";

import SideBar from '../components/SideBar';
import UsersPage from './UsersPage/UsersPage';
import MapPage from './MapPage/MapPage';

class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="Root">
                <SideBar />
                <main>
                    <Switch>
                        <Route
                            path='/users'
                            component={UsersPage}
                        />
                        <Route
                            path='/map'
                            component={MapPage}
                        />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default Root;