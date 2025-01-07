import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

import About from './pages/About'
import Collection from './pages/Collection.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Cart from './pages/Cart.jsx'
import Login from './pages/Login.jsx'
import PlaceOrder from './pages/PlaceOrder.jsx'
import Order from './pages/Orders.jsx'
import Product from './pages/Product.jsx'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/collection" element={<Collection/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path='/product/:id' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='place-order' element={<PlaceOrder/>} /> 
        <Route path='/order/:id' element={<Order/>} />
      </Routes>
    </div>
  )
}

export default App