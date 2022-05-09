
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Pricing from './Components/Pricing';
import Product from './Components/Product';
import Resources from './Components/Resources';
import Intergration from './Components/Intergration';
import Login from './Components/Login'
import Signup from './Components/Signup';

function App() {
  return (
    <div className="">
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/pricing' element={<Pricing/>}/>
    <Route path='/intergration' element={<Intergration/>}/>
    <Route path='/resources' element={<Resources/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
