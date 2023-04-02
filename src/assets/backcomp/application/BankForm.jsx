import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { Steps } from './Application'

const BankForm = () => {

    const { changeStep } = useContext(Steps)
    const data=localStorage.getItem("bank")
    const vals=data!==null?JSON.parse(data):{
    bankName:'',
    accountNo:'',
    branch:'',
    ifsc:'',
    accountType:''
    }


    const formik= useFormik({
        initialValues:vals
    })

    const handleNext = (e) => {
        e.preventDefault();
        localStorage.setItem("bank",JSON.stringify(formik.values))
        changeStep(3)
    }
    const handleBack=(e)=>{
        e.preventDefault();
        changeStep(1)
    }


    return (
        <>
            <div className="mx-16 px-32 py-8 shadow-md">
                <div></div>
                <div>

                    <div className="text-center text-xl font-bold underline">Bank Detail</div>
                    <form className='flex flex-col gap-4'>
                        <div className='flex flex-col  '>
                            <label htmlFor="">Bank Name:</label>
                            <input type="text" name="bankName" onChange={formik.handleChange} value={formik.values.bankName} id="" className='border-2 border-gray-600 pl-2' />
                        </div>
                        <div className='flex flex-col '>
                            <label htmlFor="">Account Number:</label>
                            <input type="text" name="accountNo" onChange={formik.handleChange} value={formik.values.accountNo} id="" className='border-2 border-gray-600 pl-2' />
                        </div>

                        <div className='flex flex-col '>
                            <label htmlFor="">Branch:</label>
                            <input type="text" name="branch" onChange={formik.handleChange} value={formik.values.branch} id="" className='border-2 border-gray-600 pl-2' />
                        </div>
                        <div className='flex flex-col '>
                            <label htmlFor="">IFSC:</label>
                            <input type="text" name="ifsc" onChange={formik.handleChange} value={formik.values.ifsc} id="" className='border-2 border-gray-600 pl-2' />
                        </div>

                        <div className='flex flex-col '>
                            <label htmlFor="">Type Of Account:</label>
                            <div className="flex gap-5">
                                <span className='flex gap-1'> <input type="radio" name="accountType" onChange={formik.handleChange} defaultValue="SAVING" className='border-2 border-gray-600 pl-2' />SAVING</span>
                                <span className='flex gap-1'><input type="radio" name="accountType" onChange={formik.handleChange} defaultValue="CURRENT" className='border-2 border-gray-600 pl-2' />CURRENT</span>
                            </div>
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

export default BankForm