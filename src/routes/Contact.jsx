import React from 'react';
import "../stylesheets/cont.css";

const Contact = () => {
  return (
    <>
     <div id='contact-main' className='container max-w-full h-svh flex'>
        <div id="contact-left" className='bg-blue-700 w-1/2 text-white content-center'>
            <h1 className='text-3xl mx-12 font-["Oswald"]'>Contact Us</h1>
            <form className='p-10 gap-5' method='post'>
                <input className="w-1/2 p-3 outline-none bg-transparent" name='fname' type='text' placeholder='First Name' />
                <input className="w-1/2 p-3 outline-none bg-transparent" name='lname' type='text' placeholder='Last Name' />
                <input className='w-1/2 p-3 outline-none bg-transparent' name='email' type='email' placeholder='Email' />
                <input className='bg-yellow-400 rounded-md py-2 px-4 text-zinc-700 hover:bg-purple-600 duration-300 ease-in-out' name='submit' type='submit' />
            </form>
        </div>
        <div id='contact-right' className='w-1/2'>
            <img className='w-full h-full object-cover' src='../images/contact.png' alt='contact'/>
        </div>
     </div> 
    </>
  )
}

export default Contact