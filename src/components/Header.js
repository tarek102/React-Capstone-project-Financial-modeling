import React from 'react';
import { BsFillMicFill } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';
// import { NavLink } from "react-router-dom";

const Header = () => (
  <div className="navigation">
    <nav className="d-flex justify-content-between p-4">
      <h3>Crypto currencies</h3>
      <div className="nav-icons">
        <BsFillMicFill />
        <IoMdSettings />
      </div>

    </nav>
  </div>
);

export default Header;
