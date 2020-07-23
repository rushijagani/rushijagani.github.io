import React from 'react';
import { ReactComponent as FrontEnd } from './../../assets/images/svg/static_assets.svg';
import { ReactComponent as ReactSVG } from './../../assets/images/svg/react.svg';
import { ReactComponent as WordpressSVG } from './../../assets/images/svg/wordpress.svg';

import './content.scss';

const Content = () => {
  return (
    <div className="content content__container">
      <h2>
        Hi there <span className="icons">👋</span>, I'm Rushi!
      </h2>
      <span className="content__role">Front End Specialist</span>
      <h3>About Me:</h3>{' '}
      <p>
        I am extremely passionate about developing performant{' '}
        <span className="icons">🚀</span>, user-focused UIs{' '}
        <span className="icons"></span>😍 web applications{' '}
        <span className="icons">💻</span> with the best and latest technology. I
        love
        <span className="icons">❤️</span>️ working with ReactJS{' '}
        <span className="icons">⚛️</span>, HTML, CSS and JavaScript but I also
        spend most of the time exploring the latest technologies like NodeJS,
        GatsbyJS, NextJS, GraphQL. I also worked with PHP, WordPress
        Theme/Plugin development.
      </p>
      <h3>Personally:</h3>{' '}
      <p>
        I'm very fond of music <span className="icons">🎼</span> of various
        genres. Apart from that the mountains are my favorite terrain, and I
        live in the Pune(IN) city which becomes hill station in rainy season due
        to an extensive mountain range. Rainy season turns the entire dry lands
        into beautiful nature landscapes.
      </p>
      <h3>Staying fit:</h3>{' '}
      <p>
        Staying fit is important for good health, and maintaining a healthy
        lifestyle is the key to staying fit. I start my day with a workout. I'm
        the kind of person who really loves most exercise, but{' '}
        <span className="icons">🚶</span> walking my favorite.
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
