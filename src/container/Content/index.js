import React from 'react';
import { ReactComponent as FrontEnd } from './../../assets/images/svg/static_assets.svg';
import { ReactComponent as ReactSVG } from './../../assets/images/svg/react.svg';
import { ReactComponent as WordpressSVG } from './../../assets/images/svg/wordpress.svg';

import './content.scss';

const Content = () => {
  return (
    <div className="content content__container">
      <h2>Hi there, I'm Rushi!</h2>
      <span className="content__role">Front End Specialist</span>
      <p>
        I like making fun, interactive things with code. I mostly work with UI
        technologies HTML, CSS & JavaScript (React.js), but have also experience
        with PHP (WordPress).
      </p>
      <div className="content__skills-wrap">
        <FrontEnd />
        <ReactSVG />
        <WordpressSVG />
      </div>
    </div>
  );
};

export default Content;
