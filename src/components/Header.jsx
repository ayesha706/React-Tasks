import React, { useContext } from 'react'
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { useDarkMode } from '../contexts/DarkModeContext';

export const Header = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  // const navClassName = isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black';
  return (
    <div>
      <nav className='flex justify-between p-5 bg-gray-200 dark:bg-gray-800 text-black dark:text-white'>
        <div>Assessments</div>
        <div className='flex'>
          <div className='pr-3'>
            <Link to="/" >
              List
            </Link>
          </div>
          <div className='pr-3'>
            <Link to="/image-gallery" >Gallery</Link>
          </div>
          <div className='pr-3'>
            <Link to="/product-card">Product Card</Link>
          </div>
          <div className='pr-3'>
            <Link to="/stock-data">Stock Data</Link>
          </div>
          <div className='pr-3'>
            <Link to="/username-data">UserName Data</Link>
          </div>
        </div>
        <div className='flex'>
        <div className='p-2 cursor-pointer' onClick={toggleDarkMode}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </div>
          <div><Link to="/login">Login</Link></div>
        </div>
      </nav>
    </div>
  )
}
