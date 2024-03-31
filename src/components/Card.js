import React from 'react';

function Card(props) {
    const classes = `card ${props.className}`; // Ensure a space between classes
    return <div className={classes}>{props.children}</div>;
}

export default Card;