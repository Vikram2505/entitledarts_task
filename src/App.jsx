import { useState } from 'react';
import './App.css'
import LeftSideBar from './components/LeftSideBar';
import { Stepper, Step } from 'react-form-stepper';
import StepperForm1 from './components/StepperForm/StepperForm1';
import { sepsMenu } from "./utils/leftSideMenu";
import StepperForm2 from './components/StepperForm/StepperForm2';
import StepperForm3 from './components/StepperForm/StepperForm3';

function App() {
  const [activeStep, setActiveStep] = useState(0);

  const [selectedLocation, setSelectedLocation] = useState({
    deviceName: "Cam_1",
    lat: 21.146310,
    lng: 79.084910,
  });

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handlePrev = () => {
    setActiveStep(activeStep - 1)
  }

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <StepperForm1 setSelectedLocation={setSelectedLocation} selectedLocation={selectedLocation} />
        );
      case 1:
        return (
          <StepperForm2 />
        )
      case 2:
        return (
          <StepperForm3 selectedLocation={selectedLocation} />
        )

    }
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2">
            <LeftSideBar />
          </div>
          <div className="col-lg-10">
            <div className='bg-white p-3'>
              <h6>Devices Gate Cam 1</h6>
              <p>Configure the device and setup the events that you want each camera to detact</p>
              <div className='stepper mb-3'>
                <Stepper activeStep={activeStep} >
                  {sepsMenu.map(label => (
                    <Step key={label} label={label} />
                  ))}
                </Stepper>
              </div>
              {
                getStepContent(activeStep)
              }

              <div className='mt-4 w-50 ms-auto'>
                <button className='btn btn-outline-primary w-25' onClick={handlePrev} disabled={activeStep === 0}>Previous</button>
                <button className='btn btn-primary mx-3 w-25' onClick={handleNext}>Save & Next</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
