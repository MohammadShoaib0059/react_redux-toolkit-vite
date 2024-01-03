import React from 'react'
import useCounter from './useCounter'

const Decreament = () => {
    const {count,Decreament} = useCounter();
  return (
    <div>
    <h3>{count}</h3>
      <button className='btn btn-danger' onClick={Decreament}>Decreament</button>
    </div>
  )
}

export default Decreament
