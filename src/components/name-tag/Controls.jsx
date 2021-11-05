import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ 
  personName,
  greetingMessage,
  personNameChange,
  greetingMessageChange,
}) => {
  return (
    <form>
      <label htmlFor="greeting">Greeting</label>
      <input
        id="greeting"
        name="greeting"
        value={greetingMessage}
        type="text"
        onChange={greetingMessageChange}
      />
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        value={personName}
        type="text"
        onChange={personNameChange}
      />
    </form>
  );
};

Controls.propTypes = { personNameChange:PropTypes.func,
  greetingMessageChange: PropTypes.func,
  greetingMessage: PropTypes.string,
  personName: PropTypes.string,
  
};

export default Controls;
