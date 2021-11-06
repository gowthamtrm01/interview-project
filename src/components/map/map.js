import React,{useContext} from "react";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from '@mui/icons-material/LocationOn';

import {locationContext} from './../../app';

const Map = () => {

    const coordinates = {lat: 11.1271, lng: 78.6569};
    const {state} = useContext(locationContext);

    return (
        <div style={{borderBottomRightRadius: '36px'}}>
             <div id="mapContainer" >
                <GoogleMapReact
                    id='map'
                    bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
                    defaultCenter={coordinates}
                    center={coordinates}
                    defaultZoom={8}
                    margin={[50, 50, 50, 50]}
                    options={''}
                    onChange={() => {}}
                    onChildClick={() => {}}
                >
                    {state.map((coord, i) => (
                        <div
                            lat={parseInt(coord.lat)}
                            lng={parseInt(coord.lng)}
                            key={i}
                        >
                            <LocationOnIcon fontSize="large"/>
                        </div>
                    ))}
                </GoogleMapReact>
            </div>
        </div>
    )
}

export default Map;