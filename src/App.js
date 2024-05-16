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
import TestimonialSlider from './components/testimonial/testimonial';
import Mydetail from './components/Mydetail';
// import Detailpro from './components/detailpro';
// import Detailpro from './components/Detailpro';



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
        <Route path='/detailpro' element={<detailpro/>}></Route>
        <Route path='/Footer' element={<Footer/>}></Route>
        <Route path='/testimonial' element={<TestimonialSlider/>}></Route>
        {/* <Route path='/detailpro' element={<Detailpro/>}></Route> */}
<Route path='/mydetail' element={<Mydetail/>}></Route>



      </Routes>
    </div>
  );
}

export default App;
