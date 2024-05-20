import React from 'react';
import "../stylesheets/cont.css";

const Contact = () => {
  return (
    <>
     <div id='contact-main' className='bg-zinc-600 max-w-full h-screen content-center flex'>
        <div id="contact-left" className='bg-blue-700 w-1/2 h-screen content-center'>
            <h1 className='text-2xl mx-12 font-["Oswald"]'>Contact Us</h1>
            <form className='p-10 gap-5' method='post'>
                <input className="w-1/2 p-3 outline-none bg-transparent" name='fname' type='text' placeholder='Enter Your First Name' />
                <input className="w-1/2 p-3 outline-none bg-transparent" name='lname' type='text' placeholder='Enter Your Last Name' />
                <input className='w-1/2 p-3 outline-none bg-transparent' name='email' type='email' placeholder='Enter Your Email' />
                <input className='bg-yellow-400 rounded-md py-2 px-4 text-zinc-700 m-6' name='submit' type='submit' />
            </form>
        </div>
        <div id='contact-right' className='bg-yellow-500 w-1/2 h-screen'>
            <img className='w-full h-full object-cover' src='../images/contact.png' alt='contact'/>
        </div>
     </div> 
    </>
  )
}

export default Contact