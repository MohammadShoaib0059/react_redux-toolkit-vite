import React, { useState } from 'react'

const useCounter = () => {
    const [count, setcount] = useState(0);
     const Increament = () =>{
        setcount(count + 1);
     }

     const Decreament = () =>{
        setcount(count - 1);
     }
  return {count, Increament , Decreament};
}

export default useCounter
