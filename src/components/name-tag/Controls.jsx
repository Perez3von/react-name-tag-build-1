import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ personNameChange,
  greetingMessageChange,
  onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="greeting">Greeting</label>
      <input
        id="greeting"
        name="greeting"
        type="text"
        onChange={greetingMessageChange}
      />
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={personNameChange}
      />
    </form>
  );
};

Controls.propTypes = { personNameChange:PropTypes.func.isRequired,
  greetingMessageChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Controls;
