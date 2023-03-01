import React from 'react'

const BankForm = () => {
    return (
        <>
            <div className="mx-16 px-32 py-8 shadow-lg shadow-black">
                <div></div>
                <div>

                <div className="text-center text-xl font-bold underline">Bank Detail</div>
                <form className='flex flex-col gap-4'>
                    <div className='flex flex-col  '>
                        <label htmlFor="">Bank Name:</label>
                        <input type="text" name="" id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="">Account Number:</label>
                        <input type="text" name="" id="" className='border-2 border-gray-600' />
                    </div>
                   
                    <div className='flex flex-col '>
                        <label htmlFor="">Branch:</label>
                        <input type="text" name="" id="" className='border-2 border-gray-600' />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="">IFSC:</label>
                        <input type="text" name="" id="" className='border-2 border-gray-600' />
                    </div>
                   
                    <div className='flex flex-col '>
                        <label htmlFor="">Type Of Account:</label>
                        <div className="flex gap-5">
                            <span className='flex gap-1'> <input type="radio" name="accountType" className='border-2 border-gray-600' />SAVING</span>
                            <span className='flex gap-1'><input type="radio" name="accountType" className='border-2 border-gray-600' />CURRENT</span>
                         </div>
                    </div>
                   
                    <div className='flex gap-16 justify-center'>

                        <input type="submit" name="" value="Save" className='border-2 px-16 bg-green-300 border-gray-200  hover:bg-green-400  cursor-pointer' />
                        <input type="submit" name="" value="Next" className='border-2 px-16 bg-blue-300 border-gray-200  hover:bg-blue-400  cursor-pointer' />
                    </div>

                </form>
                </div>

            </div>
        </>
    )
}

export default BankForm