import React from 'react';
import PropTypes from 'prop-types';

export function Feedback({name = 222, feedback}) {
    return <>{name} :: {feedback}</>
}

Feedback.defaultProps = {
    name: '123'
}

Feedback.propTypes = {
    name: PropTypes.string,        
    feedback: PropTypes.string.isRequired,
}