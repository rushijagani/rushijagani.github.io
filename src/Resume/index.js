import React, { Component } from 'react';
import Container from '../ui/Container';
import Sidebar from './Sidebar';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

class Resume extends Component {
  render() {
    return (
      <Container>
        <Header {...DATA.main} />
        <div style={{ display: 'flex' }}>
          <Main {...DATA.main} />
          <Sidebar data={DATA.sidebar} />
        </div>
        <Footer links={DATA.footerLinks} />
      </Container>
    );
  }
}

const DATA = {
  sidebar: {
    education: {
      university: 'Rajasthan Technical University',
      duration: '2008 - 2012',
      degree: 'Bachelor of Computer Science & Engineering',
    },
    languages: [
      {
        name: 'JavaScript (ES2015)',
        proficiency: 0.6,
      },
      {
        name: 'HTML5/CSS3',
        proficiency: 0.7,
      },
      {
        name: 'PHP',
        proficiency: 0.6,
      },
    ],
    databases: ['MySQL'],
    libraries: [
      'React',
      'Redux',
      'Node',
      'jQuery',
      'Sass/Less',
      'Phonegap',
      'WordPress',
    ],
    tools: [
      'Firebase',
      'Git/SVN',
      'Webpack',
      'Gulp/Grunt',
    ],
    interests: [
      'I <b>learn</b> about web and startups.',
      'I <b>love</b> movies, fitness, and traveling.',
      'I <b>hate</b> doing planks.',
    ],
    links: [
      {
        name: 'Email',
        faClass: 'fa fa-envelope',
        display: 'rushi.jagani@ymail.com',
        link: 'mailto:rushi.jagani@ymail.com',
      },
      {
        name: 'GitHub',
        faClass: 'fa fa-github',
        display: 'github.com/rushijagani',
        link: 'https://github.com/rushijagani',
      },
      {
        name: 'Twitter',
        faClass: 'fa fa-twitter',
        display: 'twitter.com/rushijagani_rj',
        link: 'https://https://twitter.com/rushijagani_rj',
      },
    ],
  },
  footerLinks: [
    {
      name: 'Website',
      faClass: 'fa fa-fire',
      display: 'https://rushijagani.github.io/',
      link: 'https://rushijagani.github.io/',
    },
    {
      name: 'Blog',
      faClass: 'fa fa-book',
      display: 'blog',
      link: 'https://rushijagani.github.io/',
    },
    {
      name: 'Linkedin',
      faClass: 'fa fa-linkedin',
      display: 'linkedin.com/in/rushijagani',
      link: 'https://www.linkedin.com/in/rushi-jagani-99a37241/',
    },
  ],
  main: {
    firstName: 'Rushi',
    lastName: 'Jagani',
    program: {
      term: '',
      nickname: 'Software Engineer',
      name: 'Software Engineer',
    },
    website: {
      name: 'https://rushijagani.github.io/',
      link: 'https://rushijagani.github.io/',
    },
    companies: [
      {
        name: 'Cybage Software Pvt. Ltd.',
        title: 'Software Engineer',
        color: 'rgb(77, 100, 141)',
        date: 'Nov-2018 To May-2020',
        location: 'Pune, IN',
        achievements: [
          'Strong proficiency in HTML5, CSS3, JavaScript, including DOM manipulation, the JavaScript object model and the latest ECMAScript features',
          'Extensive experience in UX/UI developing web applications, and Single Page Application(SPA) using HTML5, CSS3, ReactJs, JavaScript, jQuery, AJAX, JSON, Redux Thunk',
          'Experience of using CSS pre-processors (Less/Sass)',
          'Experience of using JavaScript build tools (Grunt/Gulp/Webpack)'
        ],
      },
      {
        name: 'Brainstorm Force',
        title: 'Software Developer',
        color: 'rgb(77, 100, 141)',
        date: 'Nov-2016 To Nov-2018',
        location: 'Pune, IN',
        achievements: [
          'Translated designs UX/UI wireframes and mockups into responsive, interactive features, using HTML/CSS and JavaScript',
          'Developed Open Source CMS WordPress Plugins and Theme by utilizing HTML5, CSS3, JavaScript, jQuery, SASS, NPM, Grunt and Git',
          'Executes full-stack website launches specializing in front-end features, browser manipulation, and cross-browser compatibility',
          'Developed and maintained critical components of e-commerce website, including shopping cart, quick view, and checkout pages',
        ],
      },
      {
        name: 'Bee Logical Software Solutions',
        title: 'Software Engineer',
        color: 'rgb(77, 100, 141)',
        date: 'Mar-2014 To Oct-2016',
        location: 'Pune, IN',
        achievements: [
          'Developed a web application in Laravel framework with PHP as a scripting language and Angular Js as a frontend. Responsibility included designing of database, writing web services, creating admin portal in PHP, developing the responsive dynamic UI',
          'Developed a web admin portal for android app. Portal was in YII2 Framework. Was part of database designing, responsive UI development, portal functionalities',
          'Executes a cart system without any framework. Made extensive use of HTML5 local storage functionality',
          'Developed a Mobile Application using Phonegap Framework – ChemistPIS (Android)',
        ],
      },
    ],
    projects: [
      {
        name: '',
        tools: [],
        achievements: [],
      },
    ],
  },
};

export default Resume;
