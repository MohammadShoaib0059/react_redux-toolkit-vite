import React from 'react'
import useOnlinehook from './useOnlinehook'


const A = () => {
  return (
    <div>
      {(useOnlinehook() ? '🟢' : '🔴')}
    </div>
  )
}

export default A
