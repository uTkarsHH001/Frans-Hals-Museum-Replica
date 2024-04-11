import { useState, useEffect } from 'react'
import Home from './Components/Pages/Home'
import Nav from './Components/Nav'
import './App.css'
export default function App() {

  const[isSmall, setIsSmall] = useState(true);
    const[isMd, setIsMd] = useState(true);
    
    useEffect(() => {
        setIsSmall(window.innerWidth < 640);
        setIsMd(window.innerWidth < 1000)
    }, []);

  window.addEventListener('resize', () => {
      setIsSmall(window.innerWidth < 640);
      setIsMd(window.innerWidth < 1000);
    });
  return (
    <>
      <Home isSmall={isSmall} isMd={isMd}/>
      <Nav isMd={isMd}/>

    </>


    
  )
}