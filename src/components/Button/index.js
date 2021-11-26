import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

function Button({children, onClick, width}) {
    return(
        <button className="button" onClick={onClick} style={{width}}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    onClick: PropTypes.func.isRequired,
    width: PropTypes.number.isRequired
}

export default Button;