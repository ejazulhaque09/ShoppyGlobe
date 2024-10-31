import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React, {Suspense, lazy} from 'react'
import Header from './Components/Header'
import Error from './Components/Error'
import Checkout from './Components/Checkout'
import SuccessPage from './Components/SuccessPage'
import './App.css'
// import './App1.css'


const ProductList = lazy(() => import('./Components/ProductList'))
const ProductDetails = lazy(() => import('./Components/ProductDetails'))
const Cart = lazy(() => import('./Components/Cart'))

function App(){
  return(
    <Router>
      <Header></Header>
      <Suspense fallback={<div className='loading-spinner'>Loading...</div>}>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<ProductList/>}></Route>
          <Route path='/product/:id' element={<ProductDetails/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/checkout' element={<Checkout/>}></Route>
          <Route path='/success' element={<SuccessPage/>}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Routes>
      </main>
      </Suspense>
    </Router>
  )
}

export default App;
