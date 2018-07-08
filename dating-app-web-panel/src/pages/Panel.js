import React, { Component } from 'react';

import {
    Switch,
    Route
} from "react-router-dom";

import SideBar from '../components/SideBar';
import UsersPage from './UsersPage/UsersPage';
import MapPage from './MapPage/MapPage';
import panelRoutes from '../routes/panelRoutes';

class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div style={{
                width: `100%`,
                zIndex: `1`,
                display: `flex`,
                overflow: `hidden`,
                position: `relative`
            }}>
                <SideBar routes={panelRoutes} />
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

export default Panel;