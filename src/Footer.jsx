import React from 'react';

const Footer = () => {
  const getFullYear = new Date().getFullYear();
  return (
    <footer >
      <div className='section-center'>
        <ul className='footer-items'>
          <li>Home</li>
          <li>Featured</li>
          <li>FAQs</li>
          <li>About</li>
        </ul>
        <p className='footer-text'>@{getFullYear} Company.Inc</p>
      </div>
    </footer>
  );
};

export default Footer;
