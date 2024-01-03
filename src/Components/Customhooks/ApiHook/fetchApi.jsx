import React, { useEffect, useState } from 'react'

const fetchApi = (url) => {

    const [data, setdata] = useState([]);
    async function getdata(){
        const response = await fetch(url);
        const result = await response.json();
        setdata(result);
    };
    useEffect(()=>{
        getdata();
    })
  return data;
  
}

export default fetchApi
