import React from 'react';
import {Link} from 'react-router-dom';

export const Navbar = () => {
  /* eslint-disable */
  return (
    <nav className="navbar navbar-dark bg-dark mb-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <a className="navbar-brand mr-0" href="#">
              <i className="fa fa-github"></i> Github Finder
            </a>
          </div>
          <div className="col py-2">
            <Link
              to="/"
              className="text-light mr-4"
              style={{textDecoration: 'none'}}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-light"
              style={{textDecoration: 'none'}}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
