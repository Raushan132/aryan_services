import React from 'react'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom';


const columns = [
    {
        name: 'Code',
        selector: row => row.title,
    },
    {
        name:'Name',
        selector:row=>row.title
    },
    {
        name:'Date Of Joining',
        selector:row=>row.year
    },
    {
        name:'Designation',
        selector:row=>row.designation
    },
    {
        name:'LABOUR WELFARE FUND'
    },
    {
        name:'Category Address'
    },
    {
        name:'Date of Exit',
        selector:row=>row.year
    }
   
];


const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '13-08-1988',
        designation:'Security Guard'

    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '16-12-1984',
        designation:'Security Guard'
    },
]




const EmployeeList = () => {




  return (
   <>
   <div className="py-10">

    <Link to="/applicationList" className="cursor-pointer bg-blue-300 px-4 py-2 mb-10 w-[150px] flex justify-center items-center">Add Employee</Link>
    <div className="flex justify-center text-xl font-bold underline mb-8 ">List of Employees</div>
    
     <DataTable
                columns={columns}
                data={data}
                />
     </div>
   </>
  )
}

export default EmployeeList