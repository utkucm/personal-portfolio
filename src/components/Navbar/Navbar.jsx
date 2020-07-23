import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { act } from 'react-dom/test-utils';

const Navbar = () => {
  return (
    <div id='navbar'>
      <nav>
        <span id='brand'>
          <Link
            activeClass='active'
            to='navbar'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            uÇ.
          </Link>
        </span>

        <ul id='menu'>
          <li className='menu-link'>
            <Link
              activeClass='active'
              to='navbar'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              home<span>.</span>
            </Link>
          </li>
          <li className='menu-link'>
            <Link
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              about me<span>.</span>
            </Link>
          </li>
          <li className='menu-link'>
            <Link
              activeClass='active'
              to='work'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              work<span>.</span>
            </Link>
          </li>
          <li className='menu-link'>
            <Link
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              contact<span>.</span>
            </Link>
          </li>
        </ul>

        <div id='toggle'>
          <div className='span'>menu</div>
        </div>
      </nav>

      <div id='resize'>
        <div className='close-btn'>close</div>

        <ul id='menu'>
          <li>
            <Link
              activeClass='active'
              to='section1'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              home<span>.</span>
            </Link>
          </li>
          <li>
            <Link
              activeClass='active'
              to='section1'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              about me<span>.</span>
            </Link>
          </li>
          <li>
            <Link
              activeClass='active'
              to='section1'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              work<span>.</span>
            </Link>
          </li>
          <li>
            <Link
              activeClass='active'
              to='section1'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              contact<span>.</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
