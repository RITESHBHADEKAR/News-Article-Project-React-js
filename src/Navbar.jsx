import React from 'react';

const Navbar = () => {
  return (
    <nav class='navbar section-center'>
      <a
        href='#'
        style={{
          fontWeight: 800,
          fontFamily: 'Cinzel',
          color: 'red',
          textDecoration: 'none',
        }}
      >
        The Times Of India
      </a>
      <button class='navbar-toggler' type='button'>
        <i class='fa fa-bars'></i>
      </button>
      <div class='nav-items' id='navbarNav'>
        <ul class='navbar-nav'>
          <li class='nav-item active'>
            <a class='nav-link ' href='#'>
              Home
            </a>
          </li>
          <li class='nav-item '>
            <a class='nav-link' href='#'>
              Go Live
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='#'>
              About Us
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='#'>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
