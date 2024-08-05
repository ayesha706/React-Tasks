import './App.css'
import { Header } from './components/Header'
import { NoPage } from './components/NoPage'
import { ImgGallery } from './gallery/ImgGallery'
import Login from './login/Login'
import Product from './product-card/Product'
import AlphaVantage from './Stock-real-time-data/AlphaVantage'
import { Layout } from './to-do-list/components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UsernameSearch } from './username-search/UsernameSearch'
import RtkqueryUsername from './username-search/RtkqueryUsername'
import Signup from './login/Signup'

function App() {
  return (
    <>
      <BrowserRouter>
      <div className='min-h-screen dark:bg-gray-800 text-black dark:text-white'>
        <Header />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/image-gallery" element={<ImgGallery />} />
          <Route path="/product-card" element={<Product />} />
          <Route path='/stock-data' element={<AlphaVantage />} />
          {/* <Route path="/username-data" element={<UsernameSearch/>} /> */}
          <Route path="/username-data" element={<RtkqueryUsername/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
