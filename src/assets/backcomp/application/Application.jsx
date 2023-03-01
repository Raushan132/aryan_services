import React, { useState } from 'react'
import BankForm from './BankForm'
import EducationForm from './EducationForm'
import MultiStep from './MultiStep'
import PersonalForm from './PersonalForm'

const Application = () => {

  const[step,setStep]=useState(1);

  return (
    <>
      
         <MultiStep />
        {step===1 && <PersonalForm />}
        {step===2 && <BankForm />}
         {step===3 && <EducationForm />}
         {step===4}
    </>
  )
}

export default Application