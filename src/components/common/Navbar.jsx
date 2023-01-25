import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { closeIcon, logo, menuIcon } from '../../assets';
import { links } from '../../contents';
import { ScheduleDemoBtn } from '../../components';

import '../../styles/Navbar.css';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleLinkClick = () => {
    setShowLinks((oldVal) => !oldVal);
  };

  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>

      <div
        className={`nav-links-and-mobile-close-btn-container ${
          showLinks && 'show-links'
        }`}
      >
        {/* close menu icon */}
        <button
          type="button"
          className="hide-menu"
          onClick={() => setShowLinks(false)}
        >
          <img src={closeIcon} alt="close nav" />
          <span>hide menu</span>
        </button>

        {/* nav links */}
        <ul aria-label="navigation links">
          {links.map(({ id, name, path }) => (
            <li key={id} onClick={handleLinkClick}>
              <NavLink to={path}>{name}</NavLink>
            </li>
          ))}
        </ul>

        {/* demo btn */}
        <div className="nav__demo-btn-container">
          <ScheduleDemoBtn />
        </div>
      </div>

      <button
        type="button"
        className="show-menu"
        onClick={() => setShowLinks(true)}
      >
        <img src={menuIcon} alt="show nav" />
        <span>show menu</span>
      </button>
    </nav>
  );
}

export default Navbar;
