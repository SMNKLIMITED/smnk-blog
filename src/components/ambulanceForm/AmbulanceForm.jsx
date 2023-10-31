import React, { useState } from 'react'
import { StepperContext } from './contexts/StepperContext'
import Stepper from './Stepper'
import StepperControl from './StepperControl'
import AmbulanceDetails from './steps/AmbulanceDetails'
import CompanyDetails from './steps/CompanyDetails'
import Final from './steps/Final'
import Document from './steps/Document'



const AmbulanceForm = () => {

  const [currentStep, setCurrentStep] = useState(1);
  const [finalData, setFinalData] = useState([])

  const [userData, setUserData] = useState({
   
  
    
    fullName:'',
    email:'',
    password:'',
    gender:'',
    phonenumber:'',
    category: '',
    username: '',
    
  })


  const steps = [
    "Confirm Login",
    "Account Details",
    "Author Information",
    "complete"
  ]
  const displayStep = (step) => {
    switch(step) {
        case 1:
        return <CompanyDetails values={userData} handleChange={handleChange}/>
        case 2:
        return <AmbulanceDetails values={userData} handleChange={handleChange}/>
        case 3:
          return <Document values={userData} handleChange={handleChange}/> 
        case 4:
       
        return <Final values={userData} handleChange={handleChange}/>
        default:
    }
  }
  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
  // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep)
  }

  const handleChange = (input) => (e) => {
    setUserData({ ...userData, [input]: e.target.value});
}
  

  return (
    <div className='md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white-200'>
      {/* stepper */}
      <div className='container horizontal mt-5'>
      <Stepper
      steps={steps}
      currentStep={currentStep}
      />
      {/* display component */}
      <div className='my-10 p-10'>
        <StepperContext.Provider value={{
          userData,
          setUserData,
          finalData,
          setFinalData
        }}>
          {displayStep(currentStep)}
        </StepperContext.Provider>
      </div>
      </div>

        {currentStep !== steps.length &&
      <StepperControl
      handleClick={handleClick}
      currentStep={currentStep}
      steps={steps}
      />}
    </div>
  )
}

export default AmbulanceForm

