import React, { useContext } from 'react'
import { Steps } from './Application';

const EducationForm = () => {

    const { changeStep } = useContext(Steps)
    const handleNext = (e) => {
        e.preventDefault();
        changeStep(4)
    }

    const handleBack=(e)=>{
        e.preventDefault();
        changeStep(2)
    }


    return (
        <>
            <div className="mx-16 px-32 py-8 shadow-lg shadow-black">
                <div></div>
                <div>

                    <div className="text-center text-xl font-bold underline">Educational Detail</div>
                    <form className='flex flex-col gap-4'>
                        <div className='flex flex-col  '>
                            <label htmlFor="">Education Level:</label>
                            <input type="text" name="" id="" className='border-2 border-gray-600' />
                        </div>
                        <div className='flex flex-col '>
                            <label htmlFor="">Education Qualification:</label>
                            <input type="text" name="" id="" className='border-2 border-gray-600' />
                        </div>

                        <div className='flex flex-col '>
                            <label htmlFor="">Degree:</label>
                            <input type="text" name="" id="" className='border-2 border-gray-600' />
                        </div>
                        <div className='flex flex-col '>
                            <label htmlFor="">Board/University:</label>
                            <input type="text" name="" id="" className='border-2 border-gray-600' />
                        </div>
                        <div className='flex flex-col '>
                            <label htmlFor="">Year:</label>
                            <input type="text" name="" id="" className='border-2 border-gray-600' />
                        </div>

                        <div className='flex flex-col '>
                            <label htmlFor="">Percentage%:</label>
                            <input type="text" name="" id="" className='border-2 border-gray-600' />
                        </div>
                        <div></div>

                        <div className='flex flex-col '>
                            <label htmlFor="">Experience:</label>
                            <input type="text" name="" id="" className='border-2 border-gray-600' />
                        </div>

                        <div className='flex flex-col '>
                            <label htmlFor="">Company Name:</label>
                            <input type="text" name="" id="" className='border-2 border-gray-600' />
                        </div>
                        <div className='flex flex-col '>
                            <label htmlFor="">Designation:</label>
                            <input type="text" name="" id="" className='border-2 border-gray-600' />
                        </div>

                        <div className='flex flex-col '>
                            <label htmlFor="">Duration:</label>
                            <input type="text" name="" id="" className='border-2 border-gray-600' />
                        </div>

                        <div className='flex gap-16 justify-center'>
                            <input type="submit" onClick={handleBack} value="Back" className='border-2 px-8 md:px-12 lg:px-16 bg-blue-300 border-gray-200  hover:bg-blue-400  cursor-pointer' />
                            <input type="submit" name="" value="Save" className='border-2 px-16 bg-green-300 border-gray-200  hover:bg-green-400  cursor-pointer' />
                            <input type="submit" onClick={handleNext} value="Next" className='border-2 px-16 bg-blue-300 border-gray-200  hover:bg-blue-400  cursor-pointer' />
                        </div>

                    </form>
                </div>

            </div>
        </>
    )
}

export default EducationForm