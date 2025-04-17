import React from 'react'
function Icon({Immg , title}) {
    return (
      
          <div className="cataicon">
             <img src={Immg} alt="" />
         <h1>{title}</h1>
          </div>
    )
  }

export default Icon