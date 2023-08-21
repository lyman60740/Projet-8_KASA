// Dropdown.js
import React, { useState } from 'react';
import arrowDropdown from '../assets/arrowDropdown.svg';

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-head" onClick={handleClick}>
        <h3>{title}</h3>
        <img
          src={arrowDropdown}
          alt="arrow"
          className={`arrowDropdown ${isOpen ? 'rotated' : ''}`}
        />
      </div>
      <div className={`dropdown-body ${isOpen ? 'expanded' : ''}`}>
        {content}
      </div>
    </div>
  );
}

export default Dropdown;
