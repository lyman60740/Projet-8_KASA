// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className='errorBox'>
      <div></div>
        <div className='errorBox-top'>
            <div>404</div>
            <p>Oups! La page que vous demandez n'existe pas.</p>
        </div>
        <div className='errorBox-bottom'>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
    </div>
  );
}

export default Error;
