import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Properties from './components/Properties';
import Contact from './components/Contact';
import Login from './components/Login';
import LoginReg from './components/LoginReg';
import Admin from './components/Admin';
import Footer from './components/Footer';
import CustomNavbar from './components/Navbar';




function App() {
  return (
    <div>
      <CustomNavbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' exact element={<About/>} />
        <Route path='/properties' exact element={<Properties/>} />
        <Route path='/contact' exact element={<Contact/>} />
        <Route path="/Login" exact element={<Login/>} />
        <Route path='/LoginReg' element={<LoginReg/>}></Route>

        <Route path='/Admin' element={<Admin/>}></Route>
        <Route path='/Footer' element={<Footer/>}></Route>



      </Routes>
    </div>
  );
}

export default App;
