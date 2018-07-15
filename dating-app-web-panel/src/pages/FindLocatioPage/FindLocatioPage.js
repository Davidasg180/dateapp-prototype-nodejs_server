import React, { Component } from "react";
import Geosuggest from 'react-geosuggest';
const google = window.google;

class FindLocatioPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        var fixtures = [
            { label: 'Old Elbe Tunnel, Hamburg', location: { lat: 53.5459, lng: 9.966576 } },
            { label: 'Reeperbahn, Hamburg', location: { lat: 53.5495629, lng: 9.9625838 } },
            { label: 'Alster, Hamburg', location: { lat: 53.5610398, lng: 10.0259135 } }
        ];
        return (
            <div>
                <Geosuggest
                    ref={el => this._geoSuggest = el}
                    placeholder="Start typing!"
                    initialValue="Hamburg"
                    fixtures={fixtures}
                    onSuggestSelect={this.onSuggestSelect}
                    location={new google.maps.LatLng(53.558572, 9.9278215)}
                    radius="20" />

                <button onClick={() => this._geoSuggest.focus()}>Focus</button>
                <button onClick={() => this._geoSuggest.update('New Zealand')}>Update</button>
                <button onClick={() => this._geoSuggest.clear()}>Clear</button>
                <button onClick={() => this._geoSuggest.selectSuggest()}>Search</button>
            </div>
        );
    }
}

export default FindLocatioPage;