import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import BottomNav from "./Components/BottomNav";
import HomePage from './Components/HomePage'
import Footer from './Components/Footer'
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import Navbar from './Components/Navbar'


function App() {
  return (
    <>
    
    <Router>
      <Navbar/>
    <BottomNav/>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/contact' element = {<Contact/>}/>
    <Route path='/cart' element = {<Cart/>}/>
    {/* <Route path='/' element = {<HomePage/>}/> */}
    </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
