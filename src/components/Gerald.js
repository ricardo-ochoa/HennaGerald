import React from 'react';
import logoHenna from '../logo_henna.png';

export const Gerald = () => {

  return (
    <div className='backgorund'>
        <div>
            <img className='logo_henna' src={logoHenna} alt='Henna Gerald'/>
        </div>
        <a href='https://wa.me/+529932642693' target="_blank"> <button className='cta'> <img className='icon' src="https://icongr.am/fontawesome/whatsapp.svg?size=32&color=ffffff" alt='whatsapp'/>¡Quiero mi Henna!</button> </a>
    </div>
  )
}
