import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../utils/ThemeContext';

export function Feedback({name = 222, feedback}) {
    const theme = useContext(ThemeContext);
    
    return <>
    {name} :: {feedback} :: {theme}
    </>
}

Feedback.defaultProps = {
    name: '123'
}

Feedback.propTypes = {
    name: PropTypes.string,        
    feedback: PropTypes.string.isRequired,
}