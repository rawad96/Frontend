import { Link, Outlet, Route, Routes } from 'react-router-dom'
import Store from "./Store"
import Menu from './Pages/Menu'
import Products from './Pages/Products'
import Customers from './Pages/Customers'
import Purchases from './Pages/Purchases'
import Product from './Pages/Product'
import EditProduct from './Pages/EditProduct'
import ByProduct from './Pages/ByProduct'
import EditCustomer from './Pages/EditCustomer'
// import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Store />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/products' element={<Products />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/purchases' element={<Purchases />} />
        <Route path='/product' element={<Product />} />
        <Route path='/editproduct/:id' element={<EditProduct />} />
        <Route path='/editcustomer/:id' element={<EditCustomer />} />
        <Route path='/byproduct/:id' element={<ByProduct />} />
      </Routes>
    </>
  )
}

export default App
