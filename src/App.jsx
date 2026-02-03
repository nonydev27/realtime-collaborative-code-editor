import LandingPage from "../pages/LandingPage"  
import Footer from "./components/Footer"
import "./index.css"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {


  return (
    <>
     <LandingPage/>
     <Footer/>
    </>
  )
}

export default App
