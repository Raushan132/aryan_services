import React from 'react'

const PersonalForm = () => {

    return (
        <>
    
            <div className="mx-16">
                <form>
                    <div className='flex flex-col  gap-2'>
                        <label htmlFor="">Full Name:</label>
                        <input type="text" name="" id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col  gap-2'>
                        <label htmlFor="">Father's / Spouse Name:</label>
                        <input type="text" name="" id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col  gap-2'>
                        <label htmlFor="">Gender:</label>
                        <div className="flex gap-5">
                           <span className='flex gap-1'> <input type="radio" name="gender" className='border-2 border-gray-600' />Male</span>
                            <span className='flex gap-1'><input type="radio" name="gender"  className='border-2 border-gray-600' />Femail</span>
                            <span className='flex gap-1'><input type="radio" name="gender"  className='border-2 border-gray-600' />Other</span>
                        </div>
                    </div>
                    <div className='flex flex-col  gap-2'>
                        <label htmlFor="">DOB:</label>
                        <input type="date" name="" id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col  gap-2'>
                        <label htmlFor="">Mark Of Identification:</label>
                        <input type="text" name="" id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col  gap-2'>
                        <label htmlFor="">Present Address:</label>
                        <input type="text" name="" id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col  gap-2'>
                        <label htmlFor="">Permanent Address:</label>
                        <input type="text" name="" id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col  gap-2'>
                        <label htmlFor="">Nationality:</label>
                        <input type="text" name="" id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col  gap-2'>
                        <label htmlFor="">Aadhar No:</label>
                        <input type="text" name="" id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col  gap-2'>
                        <label htmlFor="">Pan:</label>
                        <input type="text" name="" id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col  gap-2'>
                        <label htmlFor="">UNA no(EPF):</label>
                        <input type="text" name="" id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col  gap-2'>
                        <label htmlFor="">PI No(ESI):</label>
                        <input type="text" name="" id="" className='border-2 border-gray-600' />
                    </div>
                    
                    <div className='flex flex-col items-center justify-center'>
                       
                        <input type="submit" name="" value="Save" className='border-2 border-gray-600' />
                    </div>

                </form>

            </div>
        </>
    )
}

export default PersonalForm