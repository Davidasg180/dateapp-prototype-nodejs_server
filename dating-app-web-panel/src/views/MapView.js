import React, { Component } from "react";
import GoogleMapReact from "google-map-react";



class MapView extends Component {
    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyAIyzlkI6OuL4pAHIAqarKJTr8VSVBmmKE" }}
                    defaultCenter={{ lat: 59.95, lng: 30.33 }}
                    defaultZoom={11}
                >

                </GoogleMapReact>
            </div>
        );
    }
}

export default MapView;