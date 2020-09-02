import React from 'react';

import './RegisterPromo.scss';
import background from './bg.svg';

import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';

const RegisterPromo = () => {
  return (
    <div className="registerPromo">
      <div className="registerPromo__logo">
        <PlaylistAddCheckIcon />
        <span>Todoapp</span>
      </div>
      <div className="registerPromo__content">
        <div className="registerPromo__header">
          <div className="registerPromo__header-text">
            Keep an eye on your <br />
            productivity
          </div>
          <img src={background} className="registerPromo__bg" alt={''} />
        </div>
        <div className="registerPromo__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut
          doloremque ea error esse ex expedita facilis, inventore ipsam minima
          nesciunt officia sapiente, tempora. Assumenda aut consectetur
          exercitationem ipsa laborum.
        </div>
      </div>
      <div className="registerPromo__footer">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" className="registerPromo__link">
          About
        </a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" className="registerPromo__link">
          Upgrade
        </a>
      </div>
    </div>
  );
};

export default RegisterPromo;
