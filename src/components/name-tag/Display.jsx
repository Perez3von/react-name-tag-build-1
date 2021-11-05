import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ personName,
  greetingMessage }) => {

  return (
    <>
      <h1>| {greetingMessage} | | | | {personName} | | |</h1>
      <h1>| Hello I'm | | | | Evon PerezZZ | | | </h1>
    </>

  );
};
Display.propTypes = {
  personName: PropTypes.string.isRequired,
  greetingMessage: PropTypes.string.isRequired,


};

export default Display;
