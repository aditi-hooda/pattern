import React, { useState } from 'react';
import { PatternA, PatternB, PatternC, PatternD, PatternE, PatternF, PatternG, PatternH, PatternI, PatternJ, PatternK, PatternL, PatternM, PatternN, PatternO, PatternP, PatternQ, PatternR, PatternS, PatternT, PatternV, PatternW, PatternU, PatternX, PatternY, PatternZ } from '../DisplayComponents';

export default function InputComponent() {
    const [inputValue, setInputValue] = useState('');
    var [ComponentsList, setComponentsList] = useState([]);

    function handleChange(event) {
        setInputValue(event.target.value);
    }
    function handleClick(event) {
        event.preventDefault();
        //create pattern for each letter in input field
        var characters = inputValue.toUpperCase().split("");
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
                    retComponents.push(<PatternC />);
                    break;
                case 'D':
                    retComponents.push(<PatternD />);
                    break;
                case 'E':
                    retComponents.push(<PatternE />);
                    break;
                case 'F':
                    retComponents.push(<PatternF />);
                    break;
                case 'G':
                    retComponents.push(<PatternG />);
                    break;
                case 'H':
                    retComponents.push(<PatternH />);
                    break;
                case 'I':
                    retComponents.push(<PatternI />);
                    break;
                case 'J':
                    retComponents.push(<PatternJ />);
                    break;
                case 'K':
                    retComponents.push(<PatternK />);
                    break;
                case 'L':
                    retComponents.push(<PatternL />);
                    break;
                case 'M':
                    retComponents.push(<PatternM />);
                    break;
                case 'N':
                    retComponents.push(<PatternN />);
                    break;
                case 'O':
                    retComponents.push(<PatternO />);
                    break;
                case 'P':
                    retComponents.push(<PatternP />);
                    break;
                case 'Q':
                    retComponents.push(<PatternQ />);
                    break;
                case 'R':
                    retComponents.push(<PatternR />);
                    break;
                case 'S':
                    retComponents.push(<PatternS />);
                    break;
                case 'T':
                    retComponents.push(<PatternT />);
                    break;
                case 'U':
                    retComponents.push(<PatternU />);
                    break;
                case 'V':
                    retComponents.push(<PatternV />);
                    break;
                case 'W':
                    retComponents.push(<PatternW />);
                    break;
                case 'X':
                    retComponents.push(<PatternX />);
                    break;
                case 'Y':
                    retComponents.push(<PatternY />);
                    break;
                case 'Z':
                    retComponents.push(<PatternZ />);
                    break;
                case ' ':
                    retComponents.push('break');
                    break;
                default:
                    alert("Invalid Character");
            }
        }
        setComponentsList(retComponents);
    }

    return (
        <div className='container'>
            <form onSubmit={handleClick} action='' className="form">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                />
                <button type='submit'>Create Pattern</button>
            </form>

            <div className='container-center'>
                {ComponentsList && ComponentsList.map((val, index) => {
                    if (val === 'break') {
                        return (<div className='break' key={index}></div>)
                    }
                    return (
                        <div key={index} className='alphabet'>
                            {val}
                        </div>);
                })}
            </div>
        </div>
    );
}
