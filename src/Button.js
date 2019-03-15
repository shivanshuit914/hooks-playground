import React, { useState } from 'react';

export default function Button() {
    const [buttonText, setButtonText] = useState('Click here');
    function handleClick() {
        return setButtonText('Clicked!');
    }
    return <button onClick={handleClick}>{buttonText}</button>;
}