import React, { useState, useEffect } from 'react'
import './App.css';
import Home from './Components/Home';
import LoadScreen from './Components/LoadScreen';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Project from './Components/Project';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [loading])
  return (
    <>
     {
      loading === false?(
        <Router>
          <Routes>
           <Route exact path='/' element={<Home/>}/>
           <Route exact path='/project' element={<Project/>}/>
           </Routes>
          </Router>
      ):
      (<LoadScreen/>)
     }
  
    </>
   
  );
}

export default App;
