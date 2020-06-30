import React from 'react';
import { ReactComponent as Github } from './../../assets/images/svg/github.svg';
import { ReactComponent as Linkedin } from './../../assets/images/svg/linkedin.svg';
import { ReactComponent as Twitter } from './../../assets/images/svg/twitter.svg';
import { ReactComponent as Wordpress } from './../../assets/images/svg/wordpress-icon.svg';
import { ReactComponent as Mail } from './../../assets/images/svg/mail.svg';

import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h4>Follow Me</h4>
        <a
          href="https://github.com/rushijagani"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
        <a
          href="https://twitter.com/rushijagani_rj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </a>
        <a
          href="https://www.linkedin.com/in/rushi-jagani-99a37241/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </a>
        <a
          href="https://profiles.wordpress.org/rushijagani/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Wordpress />
        </a>
        <a
          href="mailto:rushi.jagani@ymail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
