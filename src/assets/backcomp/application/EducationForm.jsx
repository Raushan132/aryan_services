import { useFormik } from 'formik';
import React, { useContext } from 'react'
import { Steps } from './Application';

const EducationForm = () => {

    const data=localStorage.getItem("education")
    const vals=data!==null?JSON.parse(data):{
        eduLevel:'',
        eduQualification:'',
        degree:'',
        board:'',
        year:'',
        percentage:'',
        experience:'',
        company:'',
        designation:'',
        duration:''

    }

    const formik= useFormik({
        initialValues:vals
    })

    const { changeStep } = useContext(Steps)
    const handleNext = (e) => {
        e.preventDefault();
        localStorage.setItem("education",JSON.stringify(formik.values))
        changeStep(4)
    }

    const handleBack=(e)=>{
        e.preventDefault();
        changeStep(2)
    }


    return (
        <>
            <div className="mx-16 px-32 py-8 shadow-md">
                <div></div>
                <div>

                    <div className="text-center text-xl font-bold underline">Educational Detail</div>
                    <form className='flex flex-col gap-4'>
                        <div className='flex flex-col  '>
                            <label htmlFor="">Education Level:</label>
                            <input type="text" name="eduLevel" onChange={formik.handleChange} value={formik.values.eduLevel} id="" className='border-2 border-gray-600 pl-2' />
                        </div>
                        <div className='flex flex-col '>
                            <label htmlFor="">Education Qualification:</label>
                            <input type="text" name="eduQualification" onChange={formik.handleChange} value={formik.values.eduQualification}  id="" className='border-2 border-gray-600 pl-2' />
                        </div>

                        <div className='flex flex-col '>
                            <label htmlFor="">Degree:</label>
                            <input type="text" name="degree" onChange={formik.handleChange} value={formik.values.degree} id="" className='border-2 border-gray-600 pl-2' />
                        </div>
                        <div className='flex flex-col '>
                            <label htmlFor="">Board/University:</label>
                            <input type="text" name="board" onChange={formik.handleChange} value={formik.values.board} id="" className='border-2 border-gray-600 pl-2' />
                        </div>
                        <div className='flex flex-col '>
                            <label htmlFor="">Year:</label>
                            <input type="text" name="year" onChange={formik.handleChange} value={formik.values.year} id="" className='border-2 border-gray-600 pl-2' />
                        </div>

                        <div className='flex flex-col '>
                            <label htmlFor="">Percentage%:</label>
                            <input type="text" name="percentage" onChange={formik.handleChange} value={formik.values.percentage} id="" className='border-2 border-gray-600 pl-2' />
                        </div>
                        <div></div>

                        <div className='flex flex-col '>
                            <label htmlFor="">Experience:</label>
                            <input type="text" name="experience" onChange={formik.handleChange} value={formik.values.experience} id="" className='border-2 border-gray-600 pl-2' />
                        </div>

                        <div className='flex flex-col '>
                            <label htmlFor="">Company Name:</label>
                            <input type="text" name="company" onChange={formik.handleChange} value={formik.values.company} id="" className='border-2 border-gray-600 pl-2' />
                        </div>
                        <div className='flex flex-col '>
                            <label htmlFor="">Designation:</label>
                            <input type="text" name="designation" onChange={formik.handleChange} value={formik.values.designation} id="" className='border-2 border-gray-600 pl-2' />
                        </div>

                        <div className='flex flex-col '>
                            <label htmlFor="">Duration:</label>
                            <input type="text" name="duration" onChange={formik.handleChange} value={formik.values.duration} id="" className='border-2 border-gray-600 pl-2' />
                        </div>

                        <div className='flex gap-16 justify-center'>
                            <input type="submit" onClick={handleBack} value="Back" className='border-2 px-8 md:px-12 lg:px-16 bg-blue-300 border-gray-200  hover:bg-blue-400  cursor-pointer' />
                            <input type="submit" onClick={handleNext} value="Next" className='border-2 px-16 bg-blue-300 border-gray-200  hover:bg-blue-400  cursor-pointer' />
                        </div>

                    </form>
                </div>

            </div>
        </>
    )
}

export default EducationForm