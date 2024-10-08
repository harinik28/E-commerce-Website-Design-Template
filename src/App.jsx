
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NotFound from './NotFound'
import Cart from './Cart'
import Header from './Header'
import Home from './Home'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Header/>} >
          <Route index element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
        </Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
