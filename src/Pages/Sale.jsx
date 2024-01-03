import React from 'react'
import Navigation from '../Components/Navbar'
import Products from '../Components/Products'
import Announcement from '../Components/Announcement'

const Sale = () => {
  return (
    <div>
      <Navigation/>
      <Announcement/>
      <img src='../Images/master-slide-04.jpg.webp' width="100%"/>
      <Products/>
    </div>
  )
}

export default Sale
