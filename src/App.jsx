import {HashRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Navbar from './components/navbar'
import Home from './pages/Home'
import About from './pages/About'
import Career from './pages/Career'
import Contact from './pages/Contact'
import bike from './assets/bike.png'
import Login from './components/Login'
export default function App(){
return (
    <HashRouter>
    <header className="header">
    <h1>Let's Ride</h1>
    <Navbar/>
    </header>
    <img src={bike} alt="Bike" width="200" height="200"/>
    <Routes>
      <Route path="/" element={<Home/>}/>
       <Route path="/login" element={<Login/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/career" element={<Career/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </HashRouter>
)
}
