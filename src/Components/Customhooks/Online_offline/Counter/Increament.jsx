import React from 'react'
import useCounter from './useCounter'

const Increament = () => {
const {count , Increament} =  useCounter();

  return (
    <div>
    <h3>{count}</h3>
      <button className='btn btn-primary' onClick={Increament}>Increament</button>
    </div>
  )
}

export default Increament
