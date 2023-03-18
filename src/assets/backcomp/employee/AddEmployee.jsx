import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {

    const navigate = useNavigate()

    const formik= useFormik({
        initialValues:{
            name:'',
            joiningDate:'',
            designation:'',
            categoryAddress:'',
            labourWelfareFund:'',
            remarks:''
        }
    })

    const handleNext = (e) => {
        e.preventDefault();
        console.log(formik.values)
        navigate("/employeeList")
    }

  return (
    <>
      <div className="mx-16 px-32 py-8 shadow-lg shadow-black">
                <div></div>
                <div>

                    <div className="text-center text-xl font-bold underline">Add Employee</div>
                    <form className='flex flex-col gap-4'>
                        <div className='flex flex-col  '>
                            <label htmlFor="">Employee Name:</label>
                            <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name} id="" className='border-2 border-gray-600 pl-2' />
                        </div>
                        <div className='flex flex-col '>
                            <label htmlFor="">Joining Date:</label>
                            <input type="date" name="joiningDate" onChange={formik.handleChange} value={formik.values.joiningDate} id="" className='border-2 border-gray-600 pl-2' />
                        </div>

                        <div className='flex flex-col '>
                            <label htmlFor="">Designation:</label>
                            <input type="text" name="designation" onChange={formik.handleChange} value={formik.values.designation} id="" className='border-2 border-gray-600 pl-2' />
                        </div>
                        <div className='flex flex-col '>
                            <label htmlFor="">Category Address:</label>
                            <input type="text" name="categoryAddress" onChange={formik.handleChange} value={formik.values.categoryAddress} id="" className='border-2 border-gray-600 pl-2' />
                        </div>
                        <div className='flex flex-col '>
                            <label htmlFor="">Labour Welfare Fund:</label>
                            <input type="text" name="labourWelfareFund" onChange={formik.handleChange} value={formik.values.labourWelfareFund} id="" className='border-2 border-gray-600 pl-2' />
                        </div>
                        <div className='flex flex-col '>
                            <label htmlFor="">Remarks:</label>
                            <input type="text" name="remarks" onChange={formik.handleChange} value={formik.values.remarks} id="" className='border-2 border-gray-600 pl-2' />
                        </div>

                        

                        <div className='flex gap-16 justify-center'>
                           <input type="submit" onClick={handleNext} value="Save" className='border-2 px-16 bg-blue-300 border-gray-200  hover:bg-blue-400  cursor-pointer' />
                        </div>

                    </form>
                </div>

            </div>
    </>
  )
}

export default AddEmployee