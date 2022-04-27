import React from 'react'
import Boiler from './Components/Boiler'
import Test from './Components/Test'
import Fetch from './Components/Fetch'

import {
  BrowserRouter,
  Routes,
  Route,
 
 
} from "react-router-dom";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Boiler/>}/>
      <Route path="/test" element={<Test/>}/>
      <Route path="/fetch" element={<Fetch/>}/>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App