import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/";
import Header from "./components/Header"
import Product from "./components/Product"

function App() {
 

  return (
    <>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Product/>}/>
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
