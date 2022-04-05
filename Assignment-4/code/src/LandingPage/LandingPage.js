import React from 'react';
import '../LandingPage/LandingPage.css'
import { Link} from 'react-router-dom';
 
export default function LandingPage() {
  return (
  <div className='start'>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK8_lxficJk5X4mjI1hhuRUu-phZdmuTjWug&usqp=CAU"></img>
  <Link to="/post"><button className='but'>enter</button></Link>
  </div>
  )
  }
