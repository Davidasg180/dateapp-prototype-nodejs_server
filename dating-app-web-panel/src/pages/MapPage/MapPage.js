import React, { Component } from "react";
import isEmpty from 'lodash/isEmpty';
import GoogleMapReact from "google-map-react";
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";
import { generateRandomPoint } from "../../utils/generateRandomPoints";

const GET_POINTS = gql`
{
    points{
      type
      coordinates
    }
  }
`;

class MapPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heatMapData: []
        }
    }
    mapdataplz(data) {
        let heatMapData = [];

        if (!isEmpty(data)) {
            data.points.forEach(element => {
                var obj = element.coordinates.reduce(function (acc, cur, i) {

                    if (!i) acc['lat'] = cur;
                    else acc['lng'] = cur;

                    return acc;
                }, {});
                heatMapData.push(obj)
            });
        }
        return heatMapData;
    }
    render() {

        const ADD_POINT = gql`
        mutation addPoint($type:String!,$coordinates:[Float]){
            point(type:$type,coordinates:$coordinates){
              type
              coordinates
            }
            }
`;
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <Mutation mutation={ADD_POINT}>
                    {(addPoint, { data }) => (
                        <div>
                            <form
                                onSubmit={e => {
                                    e.preventDefault();
                                    let randCoords = generateRandomPoint({ lat: 32.502700, lng: -117.003710 }, 1000);
                                    addPoint({
                                        variables: {
                                            type: "point", coordinates: [randCoords.lat, randCoords.lng]
                                        }
                                    });
                                }}
                            >
                                <button type="submit">Add Todo</button>
                            </form>
                        </div>
                    )}
                </Mutation>
                <Query
                    query={GET_POINTS}
                    notifyOnNetworkStatusChange
                >
                    {({ loading, error, data, refetch, networkStatus }) => {
                        if (networkStatus === 4) return "Refetching!";
                        let heatMapData = this.mapdataplz(data)
                        console.log(this.props);
                        if (this.state.heatMapData.length !== heatMapData.length) {
                            this.setState({ heatMapData });
                            refetch()
                        }
                        // if (loading) return "Loading...";
                        return (
                            <div style={{ height: '100vh', width: '100%' }}>
                                <button onClick={() => refetch()}>Refetch!</button>
                                <GoogleMapReact
                                    bootstrapURLKeys={{ key: "AIzaSyCpY6rxAaNqSaQLwprvPDnzCw-e-KsQEME" }}
                                    defaultCenter={{ lat: 32.502700, lng: -117.003710 }}
                                    defaultZoom={15}
                                    heatmapLibrary={true}
                                    heatmap={{
                                        options: {
                                            dissipating: false,
                                            radius: .001
                                        },
                                        positions: heatMapData
                                    }}
                                >
                                </GoogleMapReact>
                            </div>
                        );
                    }}
                </Query>
            </div>
        );
    }
}

export default MapPage;