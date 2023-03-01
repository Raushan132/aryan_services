import React, { useState } from 'react'
import { handleLineStep,handleStep } from './MultiStepLogic'

const MultiStep = () => {
     const[step,setStep] = useState(1)
    return (
        <>
            <div className="">

                <div className=" flex justify-center items-center mb-10 ">
                  

                    <div className="flex flex-col items-center  translate-y-6">
                        <div className={handleStep(1,step)}>
                            <h1 className='text-[32px]'>1</h1>
                        </div>
                        <div className="w-16 text-center">Personal Details</div>
                    </div>

                    {/* line between */}
                    <div className={handleLineStep(2,step)}></div>

                    <div className="flex flex-col items-center  translate-y-6">
                        <div className={handleStep(2,step)}>
                            <h1 className='text-[32px]'>2</h1>
                        </div>
                        <div className="w-16 text-center">Bank Details</div>
                    </div>

                    {/* line between */}
                    <div className={handleLineStep(3,step)}></div>

                    <div className="flex flex-col items-center  translate-y-6">
                        <div className={handleStep(3,step)}>
                            <h1 className='text-[32px]'>3</h1>
                        </div>
                        <div className="w-16 text-center">Education Details</div>
                    </div>
                    {/* line between */}
                    <div className={handleLineStep(4,step)}></div>

                    <div className="flex flex-col items-center  translate-y-6">
                        <div className={handleStep(4,step)}>
                            <h1 className='text-[32px]'>4</h1>
                        </div>
                        <div className="w-16 text-center">Document upload</div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MultiStep