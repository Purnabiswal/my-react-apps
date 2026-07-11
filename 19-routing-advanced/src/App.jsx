import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Product from './pages/Product'
import NoteFound from './pages/NoteFound'
import Men from './pages/Men'
import Women from './pages/Women'


const App = () => {
  return (
    <div className="bg-black h-screen text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoteFound />} />

        {/* Way1: */}
        {/* <Route path='/product' element={<Product/>} />
        <Route path='/product/men' element={<Men/>} />
        <Route path='/product/women' element={<Women/>} /> */}

        {/* Way-2: */}
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App
