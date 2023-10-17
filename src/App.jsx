import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import { Products } from './components/Products'
import { Cart } from './components/Cart';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
     <Routes>  
         
     <Route path="/" element={<Products/>}/>
     <Route path="/cart" element={<Cart/>}/>

   </Routes>

    </Router>
    </>
  )
}

export default App
