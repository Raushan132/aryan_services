import React from "react";




    const activeClass={
        completed:"bg-green-400 text-white transition w-24 h-24 rounded-full border-2 flex justify-center items-center",
         working:"bg-blue-400 w-24 h-24 rounded-full  border-2 flex justify-center items-center",
        notWorking:"bg-white w-24 h-24 rounded-full  border-2 flex justify-center items-center",
        
    }

    const activeLineStyle={
        completed:"w-40  border-2 border-green-400",
        working:"w-40  border-2 border-blue-400",
        notWorking:"w-40  border-2 "
    }
  export  const handleLineStep = (val,step)=>{
        return step>=val?activeLineStyle.completed:activeLineStyle.notWorking
    }
  export  const handleStep= (val,step)=>{
        // console.log(val);
       return step>val?activeClass.completed:step==val?activeClass.working:activeClass.notWorking
    }

