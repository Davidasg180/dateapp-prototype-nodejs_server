import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

class MapPage extends Component {
    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyAIyzlkI6OuL4pAHIAqarKJTr8VSVBmmKE" }}
                    defaultCenter={{ lat: 32.502700, lng: -117.003710 }}
                    defaultZoom={13}
                >
                </GoogleMapReact>
            </div>
        );
    }
}

export default MapPage;