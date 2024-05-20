import './index.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './routes/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/log-in" element={<LogIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/products" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/product-details" element={<ProductDetails/>} /> */}

      </Routes>
      {/* <Footer/> */}
   </Router>
    </>
  );
}

export default App;