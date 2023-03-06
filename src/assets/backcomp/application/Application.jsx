import React, { useState,createContext, useEffect} from 'react'
import BankForm from './BankForm'
import EducationForm from './EducationForm'
import MultiStep from './MultiStep'
import PersonalForm from './PersonalForm'

export const Steps= createContext()


const Application = () => {

  const[step,setStep]=useState(1);
  const changeStep=(val)=>{
           setStep(val)
           console.log("here:542")
  }

  

  return (
    <>
      <Steps.Provider value={{getStep:step,changeStep:changeStep}}>

         <MultiStep />
        {step===1 && <PersonalForm />}
        {step===2 && <BankForm />}
         {step===3 && <EducationForm />}
         {step===4}
      </Steps.Provider>
    </>
  )
}

export default Application