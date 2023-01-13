import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/my_pic.png';
import HeaderSocials from './HeaderSocials';
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ghazanfar Ali</h1>
        <TypeAnimation className="text-light"
          sequence={[
            'Fullstack Developer', // Types 'One'
            1000, // Waits 1s
            'Freelancer', // Deletes 'One' and types 'Two'
            2000, // Waits 2s
            'Reading Enthusiast', // Types 'Three' without deleting 'Two'
            1000,
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: '2em' }}
        />
        <CTA />

        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="my pic" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
};

export default Header;
