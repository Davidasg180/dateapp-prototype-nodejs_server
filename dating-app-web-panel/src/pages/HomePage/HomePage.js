import React, { Component } from 'react';
import MapView from "./../MapPage/MapPage";
import SideBar from "./../../components/SideBar";

import {
    Switch,
    Route
} from "react-router-dom";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="App">
                <SideBar />
                <main>
                    <Switch>
                        <Route
                            path='/map'
                            component={MapView}
                        />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default HomePage;