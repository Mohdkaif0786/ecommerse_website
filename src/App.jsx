import React from 'react'
import Home from './pages/home/home'
import { Routes, Route } from "react-router-dom"
import Cart from './pages/cart/cart'
import Allproduct from './pages/allproduct/allproduct'
import Order from './pages/order/order'
import Dashboard from './pages/admin/dashboard/dashboard'
import Nopage from './pages/nopage/nopage'
import Register from './pages/registration/register'
import Login from './pages/login/login'
import ProductInfo from './pages/productInfo/productInfo'
import AddProduct from './pages/admin/page/addProduct'
import UpdateProduct from './pages/admin/page/updateProduct'
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/protected/protectedRoute'
import ProtectedRouteForAdmin from './components/protected/protectedRouteForAdmin'
function App() {
  return (
    <div className=''>
      <ToastContainer/>
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/allproduct' element={<Allproduct/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<ProtectedRoute><Order/></ProtectedRoute>}/>
          <Route path='/dashboard' element={<ProtectedRouteForAdmin><Dashboard/></ProtectedRouteForAdmin>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/productinfo/:id' element={<ProductInfo/>}/>
          <Route path='/addproduct' element={<AddProduct/>}/>
          <Route path='/updateproduct' element={<UpdateProduct/>}/>
          <Route path='/*' element={<Nopage/>}/>
        </Routes>
    </div>
  )
}

export default App