import { Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
// import Login from './components/Login';
import Login from './components/Login';
import LoginReg from './components/LoginReg';
import Admin from './components/Admin';
import Footer from './components/Footer';
import ProCat from './components/ProCat';



function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' exact element={<About/>} />
        <Route path='/services' exact element={<Services/>} />
        <Route path='/contact' exact element={<Contact/>} />
        <Route path="/Login" exact element={<Login/>} />
        <Route path='/LoginReg' element={<LoginReg/>}></Route>

        <Route path='/Admin' element={<Admin/>}></Route>
        <Route path='/ProCat' element={<ProCat/>}></Route>
        <Route path='/Footer' element={<Footer/>}></Route>



      </Routes>
    </div>
  );
}

export default App;
