import React, { useState } from 'react'
import { GoogleMap, LoadScript, MarkerF, Autocomplete } from '@react-google-maps/api';
import { IoIosSearch } from "react-icons/io";

const containerStyle = {
    width: '640px',
    height: '380px'
};

const GoogleMapRender = ({ selectedLocation, setSelectedLocation }) => {

    const handlePlaceSelect = (place) => {
        setSelectedLocation({
            ...selectedLocation,
            lat: place?.geometry?.location.lat() || 21.146310,
            lng: place?.geometry?.location.lng() || 79.084910
        });
    };

    return (
        <LoadScript
            googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_KEY}
            libraries={['places']}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={selectedLocation}
                zoom={12}
            >
                <Autocomplete onLoad={handlePlaceSelect}
                    onPlaceChanged={handlePlaceSelect}>
                    <div>
                        <input type='text' id="mapSearchBoxInput" className='form-control'
                            placeholder="Search or Add by location"
                        />
                        <IoIosSearch className='searchIconMap' />
                    </div>
                </Autocomplete>

                <MarkerF
                    position={selectedLocation}
                    icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"} />
            </GoogleMap>
        </LoadScript>
    )
}

export default GoogleMapRender