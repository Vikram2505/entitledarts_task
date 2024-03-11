import React, { useState } from 'react'
import GoogleMapRender from '../GoogleMapRender'

const StepperForm1 = ({selectedLocation, setSelectedLocation}) => {

    return (
        <div className='row'>
            <div className='col-lg-5'>
                <div className="cameraLocationData mb-5">
                    <div className='deviceName mb-2'>
                        <div className='text-muted mb-1'>Device Name</div>
                        <input type="text" className='form-control' value={selectedLocation?.deviceName} 
                        onChange={(e)=> setSelectedLocation({...selectedLocation, deviceName: e.target.value})} required />
                    </div>
                    <div className='pole mb-2'>
                        <div className='text-muted mb-1'>Pole</div>
                        <input type="text" className='form-control' />
                    </div>
                    <div className='Latitude mb-2'>
                        <div className='text-muted mb-1'>Latitude</div>
                        <input type="text" className='form-control' value={selectedLocation?.lat} disabled />
                    </div>
                    <div className='Longitude mb-1'>
                        <div className='text-muted mb-1'>Longitude</div>
                        <input type="text" className='form-control' value={selectedLocation?.lng} disabled />
                    </div>
                </div>
            </div>
            <div className='col-lg-7'>
                <div className='position-relative'>
                    <GoogleMapRender selectedLocation={selectedLocation}
                        setSelectedLocation={setSelectedLocation} />
                </div>



            </div>
        </div>
    )
}

export default StepperForm1