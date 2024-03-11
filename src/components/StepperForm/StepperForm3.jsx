import React from 'react'

const StepperForm3 = ({ selectedLocation }) => {
    console.log(selectedLocation);
    return (
        <div>
            <label htmlFor="deviceName">Device Name</label>
            <h5>{selectedLocation?.deviceName}</h5>
            <label htmlFor="latitude">Latitude</label>
            <h5>{selectedLocation?.lat}</h5>
            <label htmlFor="longitude">Longitude</label>
            <h5>{selectedLocation?.lng}</h5>
        </div>
    )
}

export default StepperForm3