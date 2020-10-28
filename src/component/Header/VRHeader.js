import React from 'react';

export default function Header(props) {

    // is header a sub header
    const sh = props.subheader
    // is header dark
    const headerStyle = {
        color: props.dark ? 'black' : 'white',
        fontFamily: 'Inter,sans-serif',
        fontWeight: 'bold',
        fontSize: sh ? 15 : 25,
        letterSpacing: sh ? '0.04em' : '0.03em',
        opacity: sh ? '0.8' : '1',
        // marginBottom: sh ? '0px' : '15px',
        margin: '10px',
        ...props.style
    }
    // label defines what needs to be rendered
    return (
        <div style={headerStyle}> { props.label} </div>
    )
}