import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({title , img , id ,price}) => {
    const navigate = useNavigate();
    // return (
    //     <div className="card bg-base-100 w-96 shadow-sm">
    //         <figure>
    //             <img
    //                 src={img}
    //                 alt="Shoes" />
    //         </figure>
    //         <div className="card-body cursor-pointer" onClick={()=>navigate(`/product/${id}`)}>
    //             <h2 className="card-title">{title}</h2>
    //             <p>{description}</p>
    //             <div className="card-actions justify-end">
    //                 <button className="btn btn-primary" onClick={()=>navigate(`/product/${id}`)}>See more</button>
    //             </div>
    //         </div>
    //     </div>
    // )
    return (
        <div  onClick={()=>navigate(`/product/${id}`)} style={{
          width:"31%",
          border:'1px solid black'
          
        }}>
          <img style={{
            width:"100%",
            height:"220px"
          }} src={img} alt="" />
          <h1 style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            width:"90%",
            margin:"0px auto"
          }}><div style={{
            fontFamily:"cursive",
            fontSize:"1.2rem"
          }} className="price">{price}</div> 	<div style={{
            color:"rgba(0, 0, 0, 0.27)",
          }} className="fav">	&#10084;</div></h1>
          <h1 style={{
            fontFamily:"sans-serif",
            fontSize:"1rem",
            fontWeight:"600",
               width:"90%",
            margin:"0px auto"
          }}>{title}</h1>
          <h1 style={{
            color:"rgba(0, 0, 0, 0.589)",
            fontFamily:"unset",
            fontSize:"1rem",
            width:"90%",
            margin:"10px auto 0px auto"
          }} className="addres">Karachi</h1>
          <h1 style={{
               color:"rgba(0, 0, 0, 0.589)",
               fontFamily:"unset",
               fontSize:"1rem",
               width:"90%",
               margin:"5px auto"
          }} className="time">5 Days ago</h1>
          </div>
    
      )
}

export default Card