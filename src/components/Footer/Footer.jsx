import React from 'react';

const Footer = () => {
  return (
    <div id='contact'>
      <div className='footer'>
        <div className='container'>
          <br />
          <br />

          <div className='collab'>
            <div className='row'>
              <div className='col-lg-12'>
                <p className='wow fadeInUp'>You interested in a project. Get in touch.</p>
              </div>
            </div>
          </div>

          <br />

          <div className='hr'>
            <div className='row'></div>
          </div>

          <br />
          <br />

          <div className='info'>
            <div className='row'>
              <div className='col-lg-4' id='personal'>
                <p className='wow fadeInUp'>connect with me</p>
                <h4 className='wow fadeInUp' data-wow-delay='0.2s'>
                  ig @utkucmm
                </h4>
                <br />
                <br />
              </div>

              <div className='col-lg-4' id='media'>
                <p className='wow fadeInUp' data-wow-delay='0s'>
                  follow me
                </p>

                <ul>
                  <li id='ig' className='wow fadeInUp' data-wow-delay='0.6s'>
                    <a
                      className='footer-link'
                      target='_blank'
                      href='https://www.instagram.com/utkucmm'
                      rel='noopener noreferrer'
                    >
                      instagram
                    </a>
                  </li>
                  <li id='github' className='wow fadeInUp' data-wow-delay='0.8s'>
                    <a
                      className='footer-link'
                      target='_blank'
                      href='https://github.com/utkucm'
                      rel='noopener noreferrer'
                    >
                      github
                    </a>
                  </li>
                </ul>

                <br />
                <br />
              </div>

              <div className='col-lg-4' id='address'>
                <p className='wow fadeInUp' data-wow-delay='0s'>
                  say hello
                </p>
                <h4 className='wow fadeInUp' data-wow-delay='0.2s'>
                  utkucam2@gmail.com
                </h4>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
