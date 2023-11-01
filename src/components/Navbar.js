import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <nav className="navbar bg-body-tertiary">
        <div className="container-fluid mynav">
          <span className="navbar-brand mb-0 h1">{props.title}</span>
        </div>
    </nav>
  )
}


Navbar.propTypes = {
    title: PropTypes.string,
}
Navbar.defaultProps = {
    title: "navbar title"
}