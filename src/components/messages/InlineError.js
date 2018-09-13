// Semantic Ui has no form of inline error, just a huge error object
// So this will help with creating a small snippet displaying the error

import React from 'react';
import PropTypes from 'prop-types';

// Need to define PropTypes as linter does not recognize { text }

const InlineError = ({ text }) => (
    <span style={{ color: '#ce1832'}}>
        {text}
    </span>
);

InlineError.propTypes = {
    text: PropTypes.string.isRequired
};

export default InlineError;
