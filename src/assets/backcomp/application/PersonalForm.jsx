import React from 'react'

const PersonalForm = () => {


   const handleSubmit=(e)=>{
    
         var formData=new FormData();
         formData.append("hello","time")
         localStorage.setItem("personal",formData)
         
   }

    return (
        <>
    
            <div className="mx-16 px-32 py-8 shadow-lg shadow-black">
                <div className="text-center text-xl font-bold underline">Personal Detail</div>
                <form   className='flex flex-col gap-4'>
                    <div className='flex flex-col  '>
                        <label htmlFor="">Full Name:</label>
                        <input type="text" name="" id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="">Father's / Spouse Name:</label>
                        <input type="text" name="" id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="">Gender:</label>
                        <div className="flex gap-5">
                           <span className='flex gap-1'> <input type="radio" name="gender" className='border-2 border-gray-600' />Male</span>
                            <span className='flex gap-1'><input type="radio" name="gender"  className='border-2 border-gray-600' />Femail</span>
                            <span className='flex gap-1'><input type="radio" name="gender"  className='border-2 border-gray-600' />Other</span>
                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="">DOB:</label>
                        <input type="date" name="" id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="">Mobile:</label>
                        <input type="text" name="" id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="">Email:</label>
                        <input type="text" name="" id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="">Mark Of Identification:</label>
                        <input type="text" name="" id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="">Present Address:</label>
                        <input type="text" name="" id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="">Permanent Address:</label>
                        <input type="text" name="" id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="">Nationality:</label>
                        <input type="text" name="" id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="">Aadhar No:</label>
                        <input type="text" name="" id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="">Pan:</label>
                        <input type="text" name="" id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="">UNA no(EPF):</label>
                        <input type="text" name="" id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="">PI No(ESI):</label>
                        <input type="text" name="" id="" className='border-2 border-gray-600' />
                    </div>
                    
                    <div className='flex gap-16 justify-center'>
                       
                        <input type="button" onClick={handleSubmit}  value="Save" className='border-2 px-16 bg-green-300 border-gray-200  hover:bg-green-400  cursor-pointer' />
                        <input type="submit" name=""  value="Next" className='border-2 px-16 bg-blue-300 border-gray-200  hover:bg-blue-400  cursor-pointer' />
                    </div>

                </form>

            </div>
        </>
    )
}

export default PersonalForm