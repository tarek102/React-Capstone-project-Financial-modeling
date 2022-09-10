import React from 'react';
import { BsFillMicFill } from 'react-icons/bs';
import { CgChevronLeft } from 'react-icons/cg';
import { IoMdSettings } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="navigation">
    <nav className="d-flex justify-content-between p-4">
      <div className="logo">
        <NavLink
          className="align-self-center arrow"
          to="/"
        >
          <CgChevronLeft className="details" />
        </NavLink>
        <h3>Crypto currencies</h3>
      </div>
      <div className="nav-icons">
        <BsFillMicFill />
        <IoMdSettings />
      </div>

    </nav>
  </div>
);

export default Header;
