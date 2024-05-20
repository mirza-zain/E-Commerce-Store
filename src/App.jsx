import './index.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        {/* <Route path="/log-in" element={<LogIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/products" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/product-details" element={<ProductDetails/>} /> */}

      </Routes>
      <Footer />
   </Router>
    </>
  );
}

export default App;