import './App.css';
import Navbar from './components/navbar/Navbar';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Store from './pages/Store';
import About from './pages/About';
import Contact from './pages/Contact';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import All from './pages/All';
import MultiStepFrom from './components/MultiStepFrom';
import Announcement from './components/Announcement';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ProductList from './pages/ProductList';
import Product from './pages/Product';

function App() {
  
  return (
    <ShoppingCartProvider>
      <Navbar/>
      <Announcement/>
      <div className="App">
        <Routes> 
          <Route path='/' element={<Home />}/>
          <Route path='/store' element={<Store />}/>
          <Route path='/categories' element={<ProductList/>}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/product' element={<Product />}/>
          <Route path='/login' element={<MultiStepFrom />}/>
        </Routes> 
      </div>
      <Newsletter/>
      <Footer/>
    </ShoppingCartProvider>
  );
}

export default App;
