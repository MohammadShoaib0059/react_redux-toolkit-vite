import React from 'react'
import useOnlinehook from './useOnlinehook'

const B = () => {
  return (
    <div>
      {useOnlinehook() ? 'Online' : 'Offline'}
    </div>
  )
}

export default B
