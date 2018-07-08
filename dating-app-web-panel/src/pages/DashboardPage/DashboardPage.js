import React, { Component } from 'react';
import MapView from "./../MapPage/MapPage";
import SideBar from "./../../components/SideBar";

import {
    Switch,
    Route
} from "react-router-dom";

class DashboardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="App">
                <SideBar />
                <Switch>
                    <Route
                        path='/map'
                        component={MapView}
                    />
                </Switch>
            </div>
        );
    }
}

export default DashboardPage;