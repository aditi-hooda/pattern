import React, { useState } from 'react';

export default function InputComponent() {
    const [inputValue, setInputValue] = useState('');

    function handleChange(event) {
        setInputValue(event.target.value);
    }
    function handleClick(event){
        //create pattern for each letter in input field
        var characters = inputValue.split("");
        for(var ch in characters){
            switch(ch){
                case 'A':
                    //call function to print A
                break;
                case 'B':
                    //call function to print A
                break;
                case 'C':
                    //call function to print A
                break;
                case 'D':
                    //call function to print A
                break;
                case 'E':
                    //call function to print A
                break;
                case 'F':
                    //call function to print A
                break;
                case 'G':
                    //call function to print A
                break;
                case 'H':
                    //call function to print A
                break;
                case 'I':
                    //call function to print A
                break;
                case 'J':
                    //call function to print A
                break;
                case 'K':
                    //call function to print A
                break;
                case 'L':
                    //call function to print A
                break;
                case 'N':
                    //call function to print A
                break;
                case 'O':
                    //call function to print A
                break;
                case 'P':
                    //call function to print A
                break;
                case 'Q':
                    //call function to print A
                break;
                case 'R':
                    //call function to print A
                break;
                case 'S':
                    //call function to print A
                break;
                case 'T':
                    //call function to print A
                break;
                case 'U':
                    //call function to print A
                break;
                case 'V':
                    //call function to print A
                break;
                case 'W':
                    //call function to print A
                break;
                case 'X':
                    //call function to print A
                break;
                case 'Y':
                    //call function to print A
                break;
                case 'Z':
                    //call function to print A
                break;
                default:
                    alert("Invalid Character");
            }
        }
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
