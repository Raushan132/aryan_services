import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { Steps } from './Application'
const PersonalForm = () => {

 const data=localStorage.getItem("personal")
 const vals=data!==null?JSON.parse(data):{
    fullName:'',
    f_sName:'',
    gender:'',
    dob:'',
    mobile:'',
    email:'',
    identification:'',
    preAddress:'',
    perAddress:'',
    nationality:'',
    aadhar:'',
    pan:'',
    epf:'',
    esi:'',
   
}
 console.log(JSON.parse(data))
   
    const formik = useFormik({
        initialValues:vals
    })
    
    const { changeStep } = useContext(Steps)
    
    
    
    
    const handleNext = (e) => {
        e.preventDefault()
        localStorage.setItem("personal",JSON.stringify(formik.values))
        changeStep(2)
    }

    

    return (
        <>

            <div className="md:mx-16 px-8  lg:px-32 py-8 shadow-lg shadow-black">
                <div className="text-center text-xl font-bold underline">Personal Detail</div>
                <form className='grid xl:grid-cols-2 gap-4'>
                    <div className='flex flex-col  '>
                        <label htmlFor="">Full Name:</label>
                        <input type="text" name="fullName" onChange={formik.handleChange} value={formik.values.fullName} id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="">Father's / Spouse Name:</label>
                        <input type="text" name="f_sName" onChange={formik.handleChange} value={formik.values.f_sName} id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="">Gender:</label>
                        <div className="flex gap-5">
                            <span className='flex gap-1'> <input type="radio" name="gender" onChange={formik.handleChange}  defaultValue="Male" className='border-2 border-gray-600' />Male</span>
                            <span className='flex gap-1'><input type="radio" name="gender" onChange={formik.handleChange} defaultValue="Femail" className='border-2 border-gray-600' />Female</span>
                            <span className='flex gap-1'><input type="radio" name="gender" onChange={formik.handleChange}  defaultValue="Other" className='border-2 border-gray-600' />Other</span>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="">DOB:</label>
                        <input type="date" name="dob" onChange={formik.handleChange} value={formik.values.dob} id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="">Mobile:</label>
                        <input type="text" name="mobile" onChange={formik.handleChange} value={formik.values.mobile} id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="">Email:</label>
                        <input type="text" name="email" onChange={formik.handleChange} value={formik.values.email} id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="">Mark Of Identification:</label>
                        <input type="text" name="identification" onChange={formik.handleChange} value={formik.values.identification} id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="">Present Address:</label>
                        <input type="text" name="preAddress" onChange={formik.handleChange} value={formik.values.preAddress} id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="">Permanent Address:</label>
                        <input type="text" name="perAddress" onChange={formik.handleChange} value={formik.values.perAddress} id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="">Nationality:</label>
                        <input type="text" name="nationality" onChange={formik.handleChange} value={formik.values.nationality} id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="">Aadhar No:</label>
                        <input type="text" name="aadhar" onChange={formik.handleChange} value={formik.values.aadhar} id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="">Pan:</label>
                        <input type="text" name="pan" onChange={formik.handleChange} value={formik.values.pan} id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="">UNA no(EPF):</label>
                        <input type="text" name="epf" onChange={formik.handleChange} value={formik.values.epf} id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="">PI No(ESI):</label>
                        <input type="text" name="esi" onChange={formik.handleChange} value={formik.values.esi} id="" className='border-2 border-gray-600' />
                    </div>

                    <div className='flex gap-16 justify-center'>

                        <input type="submit" onClick={handleNext} value="Next" className='border-2 px-8 md:px-12 lg:px-16 bg-blue-300 border-gray-200  hover:bg-blue-400  cursor-pointer' />
                    </div>

                </form>

            </div>
        </>
    )
}

export default PersonalForm