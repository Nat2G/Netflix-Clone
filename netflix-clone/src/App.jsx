import { useState } from 'react'

// import api from "./api/api"; // Axios instance
// import requests from "./api/request"; // API Endpoints

import './App.css'
import Home from './Pages/Home/Home'

function App() {
  
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <Home/>
    </div>
  )
}

export default App
