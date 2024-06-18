import React from 'react'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='bg-white text-zinc-600 p-5 text-center'>
            <h2>Made With Love ❤️</h2>
            <div className=''>
            <a className='p-1 text-2xl text-zinc-600 hover:text-purple-700 ease-in duration-300' rel='noreferrer' href='https://www.facebook.com/profile.php?id=61559195168021' target="_blank"><ion-icon name="logo-facebook"></ion-icon></a>
            <a className='p-1 text-2xl text-zinc-600 hover:text-purple-700 ease-in duration-300' rel='noreferrer' href='https://www.instagram.com/collecthique/' target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
            </div>
          <p>&copy; 2024 Collecthique. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
