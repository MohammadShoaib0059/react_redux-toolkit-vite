import React, { useEffect, useState } from 'react'

const useOnlinehook = () => {
    const [isOnline, setisOnline] = useState(true);

    useEffect(()=>{
        window.addEventListener('online', () => setisOnline(true));
        window.addEventListener('offline', () => setisOnline(false));
    })
  return isOnline;
}

export default useOnlinehook
