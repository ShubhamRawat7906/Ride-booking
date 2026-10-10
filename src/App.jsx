import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Navbar from './components/navbar'
import Home from './pages/Home'
import About from './pages/About'
import Career from './pages/Career'
import Contact from './pages/contact'
import bike from './assets/bike.png'
import Login from './components/Login'
export default function App(){
return (
  <div>
    <h1>Let's Ride</h1>
    <img src={bike} alt="Bike" width="100" height="100"/>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path="/login" element={<Login/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/career" element={<Career/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  </div>
)
}