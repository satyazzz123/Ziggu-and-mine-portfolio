import React, { useState, useEffect } from 'react'
import './App.css';
import Home from './Components/Home';
import LoadScreen from './Components/LoadScreen';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])
  return (
    <>
     {
      loading === false?(
        <Home/>
      ):
      (<LoadScreen/>)
     }
  
    </>
   
  );
}

export default App;
