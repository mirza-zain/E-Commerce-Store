import React, {useState} from 'react';
import "../stylesheets/nav.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(true);
    }
    const handleCloseClick = () => {
        setMenuOpen(false);
      }
  return (
    <>
    <div className='container font-sans text-lg max-w-full h-fit'>
        <div id='left-nav'>
          <a className='text-purple-800 text-2xl font-mono font-bold' href='/'>Collecthique</a>
        </div>
        <div className='text-lg font-bold' id='middle-nav'>
          <a className='font-sans hover:text-purple-700 text-zinc-700' href='/home'>Home</a> 
          <a className='font-sans hover:text-purple-700 text-zinc-700' href='/about'>About Us</a> 
          <a className='font-sans hover:text-purple-700 text-zinc-700' href='/shop'>Shop</a> 
          <a className='font-sans hover:text-purple-700 text-zinc-700' href='/contact'>Contact Us</a> 
        </div>
        <div id='right-nav'>
            <a className="bg-blue-500 rounded-md pt-2 py-1 px-3 hover:bg-purple-600 text-white" href='/cart'><ion-icon name="cart"></ion-icon></a>
            <button className='duration-300 ease-in-out' onClick={handleMenuClick} style={{display: menuOpen ? 'none' : 'flex'}}><ion-icon id="open" name="menu"></ion-icon></button>            
            <button className='duration-300 ease-in-out' id="close" onClick={handleCloseClick} style={{display: menuOpen ? 'flex' : 'none'}}><ion-icon name="close"></ion-icon></button>
        </div>
    </div>
    <div id='mobile-nav' className='bg-slate-800 text-md text-white' style={{display: menuOpen ? 'flex' : 'none'}}>
        <a className='text-md font-sans hover:text-purple-700' href='/home'>Home</a> 
        <a className='text-md font-sans hover:text-purple-700' href='/about'>About Us</a> 
        <a className='text-md font-sans hover:text-purple-700' href='/shop'>Shop</a> 
        <a className='text-md font-sans hover:text-purple-700' href='/contact'>Contact Us</a> 
    </div>
    
    </>
  )
}

export default Navbar
