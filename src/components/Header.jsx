import React from 'react'

export default function Header(props) {
    const { headerText } = props;
    return (
        <h1>{headerText}</h1>
    );
}
