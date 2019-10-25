import React from "react";
import PropTypes from 'prop-types';
const Header = ({ titulo, subtitulo }) => (
  <header>
    <h1 className="text-center">{titulo}</h1>
    <p className="h5 text-center">{subtitulo}</p>
  </header>
);
Header.propTypes = {
  titulo : PropTypes.string.isRequired
}
export default Header;
