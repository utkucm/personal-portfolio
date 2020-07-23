import React from 'react';

const About = () => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 about image wow fadeInUp' data-wow-delay='1s'></div>
        </div>
      </div>
      <div className='container'>
        <div className='hero-content'>
          <br />
          <br />

          <div className='row'>
            <div className='col-lg-12'>
              <h3 className='wow fadeInUp' data-wow-delay='1.2s'>
                about me.
              </h3>
              <br />

              <p className='wow fadeInUp'>
                Living with passion is what I use there. “Always do what you love” is the right path
                for following all of my life. That's why I research a lot. I always have a desire
                "be good at what you do".
              </p>

              <p className='wow fadeInUp' data-wow-delay='0.2s'>
                I am a continuous learner. Learning for me equates to exploring new ideas and
                growing as an individual. I freely express my creativity and imagination by creating
                things from zero.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
