import React from 'react';

const Navbar = () => {
  return (
    <nav class='navbar navbar-light bg-light justify-content-between'>
      <a
        class='navbar-brand'
        style={{
          fontWeight: 800,
          fontFamily: 'Cinzel',
          color: 'red',
          textDecoration: 'none',
        }}
      >
        The Times Of India
      </a>
      <form class='form-inline'>
        <input
          class='form-control mr-sm-2'
          type='search'
          placeholder='Search'
          aria-label='Search'
        />
        <button class='btn btn-outline-success my-2 my-sm-0' type='submit'>
          Search
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
