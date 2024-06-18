import React from 'react';
import "../stylesheets/abt.css";

const About = () => {
  return (
    <>
     <div id='about-main' className='container max-w-full h-svh flex'>
        <div id='about-left' className='bg-blue-400 w-1/2 text-white content-center pl-20'>
            <h1 className='text-3xl font-bold text-zinc-800 mb-7'>About Us</h1>
            <p className='w-[80%] text-lg text-start font-["Josefin Sans"]'>Collecthique draws inspiration from global travels to create unique apparel that reflects your interests - 
            from anime to history, hobbies to everyday life. 
            There's a story waiting to be discovered in every design.
            </p>
            <h2 className='mb-2 mt-3 font-bold text-zinc-700 text-lg'>Find Out More About Us From: </h2>
            <a className='px-1 text-3xl text-zinc-600 hover:text-purple-700 ease-in duration-300' rel='noreferrer' href='https://www.facebook.com/profile.php?id=61559195168021' target="_blank"><ion-icon name="logo-facebook"></ion-icon></a>
            <a className='px-1 text-3xl text-zinc-600 hover:text-purple-700 ease-in duration-300' rel='noreferrer' href='https://www.instagram.com/collecthique/' target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
        </div>
        <div id='about-right' className='w-1/2'>
            <img className='w-full h-full object-cover' src='../images/3d.jpg' alt='3dimage' />
        </div>
     </div> 
    </>
  )
}

export default About
