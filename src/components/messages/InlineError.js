import React from 'react';
import PropTypes from 'prop-types';

class InlineError extends React.Component {
  render() {
    const {text} = this.props;
    return (
      <span style={ {color: "red"} }>
        {text}
      </span>
    );
  }
}

InlineError.propTypes = {
  text: PropTypes.string.isRequired
};

export default InlineError;
