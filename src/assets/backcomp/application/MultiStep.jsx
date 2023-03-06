import React, { useContext, useEffect, useState } from 'react'
import { handleLineStep,handleStep } from '../util/Step'
import { Steps } from './Application'

const MultiStep = () => {
    
     const{getStep}=useContext(Steps)
     
   
    return (
        <>
            <div className="">

                <div className=" flex justify-center items-center mb-10 ">
                  

                    <div className="flex flex-col items-center  translate-y-6">
                        <div className={handleStep(1,getStep)}>
                            <h1 className='text-lg md:text-[32px]'>1</h1>
                        </div>
                        <div className="w-16 text-center text-sm md:text-md">Personal Details</div>
                    </div>

                    {/* line between */}
                    <div className={handleLineStep(2,getStep)}></div>

                    <div className="flex flex-col items-center  translate-y-6">
                        <div className={handleStep(2,getStep)}>
                            <h1 className='text-lg md:text-[32px]'>2</h1>
                        </div>
                        <div className="w-16 text-center text-sm md:text-md">Bank Details</div>
                    </div>

                    {/* line between */}
                    <div className={handleLineStep(3,getStep)}></div>

                    <div className="flex flex-col items-center  translate-y-6">
                        <div className={handleStep(3,getStep)}>
                            <h1 className='text-lg md:text-[32px]'>3</h1>
                        </div>
                        <div className="w-16 text-center text-sm md:text-md">Education Details</div>
                    </div>
                    {/* line between */}
                    <div className={handleLineStep(4,getStep)}></div>

                    <div className="flex flex-col items-center  translate-y-6">
                        <div className={handleStep(4,getStep)}>
                            <h1 className='text-lg md:text-[32px]'>4</h1>
                        </div>
                        <div className="w-16 text-center text-sm md:text-md">Document upload</div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MultiStep