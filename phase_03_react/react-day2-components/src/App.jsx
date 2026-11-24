import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ProductCard from './Components/ProductCard'

const App = () => {

  return (
    <div style={{
      height:"100vH",
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-between"
    }}>
      <Navbar />
      <div style={{
        display:"flex",
        justifyContent:"space-between"
      }}>
        <ProductCard 
        url="https://i.guim.co.uk/img/media/18badfc0b64b09f917fd14bbe47d73fd92feeb27/189_335_5080_3048/master/5080.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1562112c7a64da36ae0a5e75075a0d12"
        productTitle="Iphone 15"
        productPrice="80000"
        />
        
        <ProductCard 
        url="https://i.guim.co.uk/img/media/18badfc0b64b09f917fd14bbe47d73fd92feeb27/189_335_5080_3048/master/5080.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1562112c7a64da36ae0a5e75075a0d12"
        productTitle="Samsung S25"
        productPrice="83000"/>
        <ProductCard 
        url="https://i.guim.co.uk/img/media/18badfc0b64b09f917fd14bbe47d73fd92feeb27/189_335_5080_3048/master/5080.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1562112c7a64da36ae0a5e75075a0d12"
        productTitle="Vivo 5"
        productPrice="30000"/>
      </div>
      <Footer />
    </div>
  )
}

export default App