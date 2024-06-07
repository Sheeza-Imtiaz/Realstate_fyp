import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Properties from './components/Properties';
import Contact from './components/Contact';
import Login from './components/Login';
import LoginReg from './components/LoginReg';
import Footer from './components/Footer';
// import CustomNavbar from './components/Navbar';
import TestimonialSlider from './components/testimonial/testimonial';
import Mydetail from './components/Mydetail';
import Pricing from './components/Pricecard/Price';
// import Detailpro from './components/detailpro';
// import Detailpro from './components/Detailpro';
// import Sidebar from "./components/dashboard/Sidebar"


import Sidebar from './dashboard/Sidebar';
import Addpro from './dashboard/Addpro';
import Prodetail from './dashboard/Prodetail';
import Users from './dashboard/Users';
import Pricingplan from './dashboard/Pricingplan';


import Userbar from './user/Userbar';
import Useradd from './user/Useradd';
import Userprofile from './user/Userprofile';
import Userpro from './user/Userpro';
// import Priceing from './components/Pricecard';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' exact element={<About/>} />
        <Route path='/properties' exact element={<Properties/>} />
        <Route path='/testimonial' element={<TestimonialSlider/>}></Route>
        <Route path='/contact' exact element={<Contact/>} />
        <Route path="/Login" exact element={<Login/>} />
        <Route path='/LoginReg' element={<LoginReg/>}></Route>
        <Route path='/Footer' element={<Footer/>}></Route>
        <Route path='/Price' element={<Pricing/>}></Route>


        <Route path='/Addpro' element={<Addpro/>}></Route>
        <Route path='/detailpro' element={<detailpro/>}></Route>
        <Route path='/Prodetail' element={<Prodetail/>}></Route>
        <Route path='/mydetail' element={<Mydetail/>}></Route>
        <Route path='/Sidebar' element={<Sidebar/>}></Route>
        <Route path='/Users' element={<Users/>}></Route>
        <Route path='/Pricingplan' element={<Pricingplan/>}></Route>



        <Route path='/Userbar' element={<Userbar/>}></Route>
        <Route path='/Useradd' element={<Useradd/>}></Route>
        <Route path='/Userprofile' element={<Userprofile/>}></Route>
        <Route path='/Userpro' element={<Userpro/>}></Route>









      </Routes>
    </div>
  );
}

export default App;
