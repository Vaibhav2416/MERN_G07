import React from 'react'

const ProductCard = ({url,productTitle,productPrice}) => {

  return (
    <div style={{
        border:"1px solid black",
        height:"300px",
        width:"300px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    }}>
        <img height="200px" width="200px" 
        src={url}/>
        <h3>Title: {productTitle}</h3>
        <p>Price: {productPrice}</p>
    </div>
  )
}

export default ProductCard