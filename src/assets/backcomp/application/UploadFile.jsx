import { useFormik } from 'formik'
import React, { useContext } from 'react'

import { Steps } from './Application'

const UploadFile = () => {

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

  const handleSave = (e) => {
      e.preventDefault();
      localStorage.setItem("files",JSON.stringify(formik.values))
      changeStep(3)
  }
  const handleBack=(e)=>{
      e.preventDefault();
      changeStep(3)
  }




  return (
    <>
      <div className="mx-16 px-32 py-8 shadow-md">
                <div></div>
                <div>

                    <div className="text-center text-xl font-bold underline">Upload Files</div>
                    <form className='flex flex-col gap-5 my-5'>
                        <div className='flex gap-4 justify-between '>
                            <label htmlFor="">Image:</label>
                            <input type="file" name="image" onChange={formik.handleChange} value={formik.values.bankName} id="" className='' />
                        </div>
                        <div className='flex gap-2 justify-between'>
                            <label htmlFor="">Signature of Applicant/<br/>Thumb Impression:</label>
                            <input type="file" name="sign" onChange={formik.handleChange} value={formik.values.accountNo} id="" className='' />
                        </div>

                        <div className='flex gap-2 justify-between '>
                            <label htmlFor="">Aadhar Documnet:</label>
                            <input type="file" name="aadhar" onChange={formik.handleChange} value={formik.values.accountNo} id="" className='' />
                        </div>

                      
                        <div className='flex gap-16 justify-center'>
                            <input type="submit" onClick={handleBack} value="Back" className='border-2 px-8 md:px-12 lg:px-16 bg-blue-300 border-gray-200  hover:bg-blue-400  cursor-pointer' />
                           <input type="submit" onClick={handleSave} value="Submit" className='border-2 px-16 bg-blue-300 border-gray-200  hover:bg-blue-400  cursor-pointer' />
                        </div>

                    </form>
                </div>

            </div>
    </>
  )
}

export default UploadFile