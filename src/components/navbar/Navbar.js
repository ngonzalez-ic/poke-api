import React from 'react'
import LogoAPI from '../../images/logo.png'

export default function Navabar() {

  return (
    <nav>
      <img 
        className='navbar-image'
        src={LogoAPI} />
    </nav>
  );
}
