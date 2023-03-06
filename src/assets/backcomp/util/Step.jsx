








   const circle=" transition  w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full border-2 flex justify-center items-center"
   const line="w-10 md:w-24 lg:w-32 xl:w-40 border-2 "
    const activeClass={
        completed:"bg-green-400 text-white"+circle,
         working:"bg-blue-400"+circle,
        notWorking:"bg-white"+circle,
        
    }

    const activeLineStyle={
        completed:line+"border-green-400",
        working:line+"border-blue-400",
        notWorking:line
    }
  export  const handleLineStep = (val,step)=>{
        return step>=val?activeLineStyle.completed:activeLineStyle.notWorking
    }
  export  const handleStep= (val,step)=>{
        // console.log(val);
       return step>val?activeClass.completed:step==val?activeClass.working:activeClass.notWorking
    }

