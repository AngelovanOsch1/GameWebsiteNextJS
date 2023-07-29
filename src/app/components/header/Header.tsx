'use client';
import React, { useState } from 'react';
import './header.scss';
import Login from '../login/Login';
import Signup from '../signup/Signup';

const Header: React.FC = () => {
  const [openLoginModal, setLoginOpenModal] = useState<boolean>(false);
  const [openSignupModal, setSignupOpenModal] = useState<boolean>(false);

  return (
    <header className='header'>
      <button
        className='header__loginbutton'
        onClick={() => setLoginOpenModal(true)}
      >
        Login
      </button>
      <Login
        openLogin={openLoginModal}
        onCloseLogin={() => setLoginOpenModal(false)}
      />
      <button
        className='header__signupbutton'
        onClick={() => setSignupOpenModal(true)}
      >
        Signup
      </button>
      <Signup
        openSignup={openSignupModal}
        onCloseSignup={() => setSignupOpenModal(false)}
      />
    </header>
  );
};

export default Header;
