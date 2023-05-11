import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import SideBar from './components/SideBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Name from './pages/Name'
import City from './pages/City'
import Tel from './pages/Tel'
import Country from './pages/Country'
import Address from './pages/Address'
import {FaSun, FaMoon} from 'react-icons/fa'

function App() {
  const [isDark, setIsDark] = useState(false)

  const handleToggleDarkMode = () => {
    setIsDark(!isDark);
    document.body.classList.toggle("dark");
    
  };
  return (
    <>
      <button
        className='{isDark ? "Disable" : "Enable"} p-2'
        onClick={handleToggleDarkMode}
      >
        <i>
          {isDark ? <FaMoon/> : <FaSun/>}
        </i>
                
      </button>
      <BrowserRouter>
        <div className="container mx-auto shadow-lg shadow-black rounded-lg pb-20 w-screen ">
          <Header />

          <hr className="border-t border-black dark:border-slate-500 border-solid" />

          <div className="flex items-center justify-center h-full">
            <div className="p-1 sm:p-6 md:p-8 lg:p-10 w-2/5">
              <SideBar />
            </div>

            <div className=" p-1 sm:p-6 md:p-8 lg:p-10 w-3/5">
              <Routes>
                <Route index element={<Name />} />
                <Route path="2" element={<City />} />
                <Route path="3" element={<Tel />} />
                <Route path="4" element={<Address />} />
                <Route path="5" element={<Country />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App
