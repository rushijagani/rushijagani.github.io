import React, { useState, useEffect } from 'react';

import { ReactComponent as Sun } from './../../assets/images/svg/sun.svg';
import { ReactComponent as Snow } from './../../assets/images/svg/snow.svg';
import { ReactComponent as Night } from './../../assets/images/svg/night.svg';
import { ReactComponent as Cloudy } from './../../assets/images/svg/cloudy.svg';

import './switch-mode.scss';

const SwitchMode = () => {
  const allMode = [
    { title: 'sun', url: <Sun /> },
    { title: 'snow', url: <Snow /> },
    { title: 'night', url: <Night /> },
    { title: 'cloudy', url: <Cloudy /> },
  ];

  const localSiteMode = localStorage.getItem('siteMode');
  if (localSiteMode === '') {
    localStorage.setItem('siteMode', allMode[0].title);
  }
  const [currentMode, setCurrentMode] = useState(localSiteMode);

  const toggleHandler = (mode) => {
    setCurrentMode(mode);
  };
  useEffect(() => {
    console.log(currentMode);
    document.body.classList.add(currentMode);
    localStorage.setItem('siteMode', currentMode);
    return () => document.body.classList.remove(currentMode);
  }, [currentMode]);

  return (
    <div className="site-modes">
      {allMode.map((obj, idx) => (
        <span key={idx} onClick={() => toggleHandler(obj.title)}>
          {obj.url}
        </span>
      ))}
      <div className="overlay"></div>
    </div>
  );
};

export default SwitchMode;
