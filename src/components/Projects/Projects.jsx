import React from 'react';

const Projects = () => {
  return (
    <div id='work'>
      <div className='container-fluid' id='#work'>
        <br />
        <br />
        <br />

        <h6>Selected projects</h6>

        <div className='vertical'></div>
        <br />

        <div className='whitespace'></div>
        <div className='whitespace'></div>

        <div className='row project-container'>
          <div className='col-lg-5 project-wrapper'>
            <div className='project-description'>
              A demo e-commerce website template using React, Redux, Firebase, Stripe.
            </div>
            <ul className='skills-list'>
              <li className='skills-list-item'>React</li>
              <li className='skills-list-item'>Redux</li>
              <li className='skills-list-item'>Firebase</li>
              <li className='skills-list-item'>Styled Components</li>
            </ul>

            <div className='project-links'>
              <a
                className='project-link'
                target='_blank'
                href='https://rethja-clothing.herokuapp.com/'
                rel='noopener noreferrer'
              >
                Live
              </a>
              <a
                className='project-link'
                target='_blank'
                href='https://github.com/utkucm/rethja-clothes'
                rel='noopener noreferrer'
              >
                Source Code
              </a>
            </div>
          </div>

          <div className='col-lg-7 project project1 wow fadeInUp'></div>
        </div>

        <div className='whitespace'></div>

        <div className='row project-container'>
          <div className='col-lg-6 project project2 wow fadeInUp'></div>
          <div className='col-lg-6 project-wrapper'>
            <div className='project-description'>
              A nature tours booking page including data modelling, custom global error handling
              respective to production and development environment, authentication and
              authorization, security features, server side rendering with pug templates, email
              handler, file uploads and payments with stripe integration.
            </div>
            <ul className='skills-list'>
              <li className='skills-list-item'>NodeJS</li>
              <li className='skills-list-item'>MongoDB</li>
              <li className='skills-list-item'>Express</li>
              <li className='skills-list-item'>Stripe</li>
            </ul>
            <div className='project-links'>
              <a
                className='project-link'
                target='_blank'
                rel='noopener noreferrer'
                href='https://naturify.herokuapp.com/'
              >
                Live
              </a>
              <a
                className='project-link'
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/utkucm/natours'
              >
                Source Code
              </a>
            </div>
          </div>
        </div>

        <div className='whitespace'></div>

        <div className='row project-container'>
          <div className='col-lg-5 project-wrapper'>
            <div className='project-description'>Personale porfolio website.</div>
            <ul className='skills-list'>
              <li className='skills-list-item'>React</li>
            </ul>

            <div className='project-links'>
              <a
                className='project-link'
                target='_blank'
                href='https://rethja-clothing.herokuapp.com/'
                rel='noopener noreferrer'
              >
                Live
              </a>
              <a
                className='project-link'
                target='_blank'
                href='https://github.com/utkucm/rethja-clothes'
                rel='noopener noreferrer'
              >
                Source Code
              </a>
            </div>
          </div>

          <div className='col-lg-7 project project1 wow fadeInUp'></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
