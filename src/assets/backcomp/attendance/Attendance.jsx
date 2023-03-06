import React from 'react'
import DataTable from 'react-data-table-component'

let ceil=[];
for(var i=1;i<=31;i++){
    ceil.push({
        
        name: i,
        
        selector: () =>  <input type="checkbox" />,
        minWidth: 5,
        maxWidth:10,
        wrap:true
    })
}

const columns = [
    {
        name: 'Name',
        selector: row => row.title,
        
        
    }
   
];

ceil.map(day=> columns.push(day))



const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]




const Attendance = () => {
    return (
        <>
            <DataTable
                columns={columns}
                data={data}
                
                
            />
        </>
    )
}

export default Attendance