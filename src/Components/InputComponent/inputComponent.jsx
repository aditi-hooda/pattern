import React, { useState } from 'react';

export default function InputComponent() {
    const [inputValue, setInputValue] = useState('');

    function handleChange(event) {
        setInputValue(event.target.value);
    }
    function handleClick(event){
        //create pattern for each letter in input field
           
    }

    return (
        <>
        <input
            type="text"
            value={inputValue}
            onChange={handleChange}
        />
        <button onClick={handleClick}>Create Pattern</button>
        </>
    );
}
