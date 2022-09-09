import React from 'react';
import { BsFillMicFill, BsArrowLeftCircle } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="navigation">
    <nav className="d-flex justify-content-between p-4">
      <div className="logo">
        <h3>Crypto currencies</h3>
        <NavLink
          className="align-self-center arrow"
          to="/"
        >
          <BsArrowLeftCircle className="details" />
        </NavLink>
      </div>
      <div className="nav-icons">
        <BsFillMicFill />
        <IoMdSettings />
      </div>

    </nav>
  </div>
);

export default Header;
