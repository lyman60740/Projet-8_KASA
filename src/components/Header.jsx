import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/LOGO.svg';

function HeaderLink({ to, label, children }) {
  const location = useLocation();

  return (
    <Link to={to} className={location.pathname === to ? 'active' : ''}>
      {children || label}
    </Link>
  );
}

function Header() {
  return (
    <header>
      <nav>
        <div className="nav-logo">
          <HeaderLink to="/">
            <img src={logo} alt="Logo" />
          </HeaderLink>
        </div>

        <div className="nav-link">
          <HeaderLink to="/" label="Accueil" />
          <HeaderLink to="/about" label="À propos" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
