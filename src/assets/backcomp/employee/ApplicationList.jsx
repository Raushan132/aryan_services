import React from 'react'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom';


const columns = [

    {
        name: 'Name',
        selector: row => row.title
    },
    {
        name: 'Mobile',
        selector: row => row.mobile
    },
    {
        name: 'Email',
        selector: row => row.email
    },
    {
        name: 'Aadhar',
        selector: row => row.aadhar
    },
    {

        selector: row => <Link to="/addEmployee" className='px-4 py-6 bg-blue-400 text-white'>Add</Link>,


    }


];


const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '13-08-1988',
        email: 'abc@gmail.com',
        mobile: '9955998877',
        aadhar: '84512312456325'

    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '16-12-1984',
        email: 'abc@gmail.com',
        mobile: '9955998877',
        aadhar: '84512312456325'
    },
]



const ApplicationList = () => {
    return (
        <>
            <div className="py-10">

                <div className="flex justify-center text-xl font-bold underline mb-8 ">List of Application</div>

                <DataTable
                    columns={columns}
                    data={data}
                />
            </div>
        </>
    )
}

export default ApplicationList