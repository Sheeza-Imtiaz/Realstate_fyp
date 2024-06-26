import { Routes, Route} from 'react-router-dom';
import "./index.css";
import AdminRoute from './dashboard/Adminroute';
import UserRoute from './user/Userroute';

import Home from './components/Home';
import About from './components/About';
import Properties from './components/Properties';
import Contact from './components/Contact';
import Login from './components/Login';
import LoginReg from './components/LoginReg';
import Footer from './components/Footer';
import TestimonialSlider from './components/testimonial/testimonial';
import Mydetail from './components/Mydetail';
import Pricing from './components/Pricecard/Price';


import Sidebar from './dashboard/Sidebar';
import Addpro from './dashboard/Addpro';
import Prodetail from './dashboard/Prodetail';
import Users from './dashboard/Users';
import Priceed from './dashboard/Priceed/Priceed';
import Dashboard from './dashboard/Dashboard';
import Message from './dashboard/Message';
import Profile from './dashboard/profile';
import Pricingplan from './dashboard/Pricingplan';


import Userbar from './user/Userbar';
import Useradd from './user/Useradd';
import Userprofile from './user/Userprofile';
import Userpro from './user/Userpro';
import Favorite from './user/Favorite';
import Package from './user/Package/Package';


function App() {
  return (
    <div>
      <Routes>

      {/* home page components  */}
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' exact element={<About/>} />
        <Route path='/properties' exact element={<Properties/>} />
        <Route path='/testimonial' element={<TestimonialSlider/>}></Route>
        <Route path='/contact' exact element={<Contact/>} />
        <Route path="/Login" exact element={<Login/>} />
        <Route path='/LoginReg' element={<LoginReg/>}></Route>
        <Route path='/Footer' element={<Footer/>}></Route>
        <Route path='/Price' element={<Pricing/>}></Route>

{/* admin side component  */}
        <Route path='/Addpro' element={<Addpro/>}></Route>
        <Route path='/detailpro' element={<detailpro/>}></Route>
        <Route path='/Prodetail' element={<Prodetail/>}></Route>
        <Route path='/mydetail' element={<Mydetail/>}></Route>
        <Route path='/Sidebar' element={<AdminRoute element={Sidebar}/>}></Route>
        <Route path='/Dashboard' element={<AdminRoute element={Dashboard}/>}></Route>
        <Route path='/Users' element={ <AdminRoute element={Users}/>}></Route>
        <Route path='/Pricingplan' element={ <AdminRoute element={Pricingplan}/>}></Route>
        <Route path='/Priceed' element={<Priceed/>}></Route>
        <Route path='/Message' element={<Message/>}></Route>
        <Route path='/Profile' element={<Profile/>}></Route>

{/* user side componenets  */}
        <Route path='/Userbar' element={<UserRoute element={Userbar}/>}></Route>
        <Route path='/Useradd' element={<UserRoute element={Useradd}/>}></Route>
        <Route path='/Userprofile' element={<UserRoute element={Userprofile}/>}></Route>
        <Route path='/Userpro' element={<UserRoute element={Userpro}/>}></Route>
        <Route path='/Favorite' element={<UserRoute element={Favorite}/>}></Route>
        <Route path='/Package' element={<UserRoute element={Package}/>}></Route>





      </Routes>
    </div>
  );
}

export default App;
