import React from 'react';
import "../stylesheets/hom.css";

const Home = () => {
  return (
    <>
      <div id="main" className='container max-w-full h-screen font-["Josefin Sans"]'>
        <div id='left' className='text-center text-white w-[50%]'>
          <h2 className='text-3xl text-black mb-10 font-bold'>Dress the Moments that <br />Make Your Story of Life</h2>
          <button className='bg-blue-600 py-2 px-4 rounded-md text-lg hover:bg-purple-500 hover:ease-in-out duration-300'>Shop Now</button>
        </div>
        <div id='right' className='w-[50%]'>
          <img src='../images/hero1.jpg' alt='heroimage'/>
        </div>
      </div>
    </>
  )
};

export default Home;