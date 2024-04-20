/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from "react-router-dom";
import './Top.css'
const Thirddiv = () => {
  return (
    <>
     <div style={{display:"flex", gap:"41px"}}>
    <div className='thirddiv'>
<NavLink to="/compiler">   <button className='lsbtn'>🡢</button> </NavLink>
    </div>

<div className='profile'>
  
</div>
{/* <h3>Profile</h3> */}
    </div>
    </>
  )
}

export default Thirddiv
