import { Outlet } from "react-router-dom"
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import './index.css'
function App() {
  

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
