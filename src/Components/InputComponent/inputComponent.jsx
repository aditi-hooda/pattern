import React, { useState } from 'react';
import PatternA from '../DisplayComponents/PatternA/PatternA';
import PatternB from '../DisplayComponents/PatternB/PatternB';

export default function InputComponent() {
    const [inputValue, setInputValue] = useState('');
    var [ComponentsList, setComponentsList] = useState([]);

    const x = "*" + <br /> + "**\n\r***\n\r****";
    function handleChange(event) {
        setInputValue(event.target.value);
    }
    function handleClick(event) {
        //create pattern for each letter in input field
        var characters = inputValue.split("");
        var retComponents = []
        for (var ch of characters) {
            switch (ch) {
                case 'A':
                    retComponents.push(<PatternA />);
                    break;
                case 'B':
                    retComponents.push(<PatternB />);
                    break;
                case 'C':
                    break;
                case 'D':
                    break;
                case 'E':
                    break;
                case 'F':
                    break;
                case 'G':
                    break;
                case 'H':
                    break;
                case 'I':
                    break;
                case 'J':
                    break;
                case 'K':
                    break;
                case 'L':
                    break;
                case 'N':
                    break;
                case 'O':
                    break;
                case 'P':
                    break;
                case 'Q':
                    break;
                case 'R':
                    break;
                case 'S':
                    break;
                case 'T':
                    break;
                case 'U':
                    break;
                case 'V':
                    break;
                case 'W':
                    break;
                case 'X':
                    break;
                case 'Y':
                    break;
                case 'Z':
                    break;
                default:
                    alert("Invalid Character");
            }
        }
        setComponentsList(retComponents);
    }

    return (
        <div className='container'>
            <div className="form">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                />
                <button onClick={handleClick}>Create Pattern</button>
            </div>

            <div className='container-center'>
                {ComponentsList && ComponentsList.map((val, index) => {
                    return (
                        <div key={index}>
                            {val}
                        </div>);
                })}
            </div>
        </div>
    );
}
