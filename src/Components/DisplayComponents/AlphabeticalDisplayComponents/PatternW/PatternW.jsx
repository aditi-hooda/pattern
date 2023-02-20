import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ExplanationComponent from '../../../ExplanationComponent/ExplanationComponent';
import { data } from './data';

export default function PatternW() {
    let [pattern, setPattern] = useState('');
    let [showCode, setshowCode] = useState(false);
    function handleClick() {
        setshowCode(!showCode);
    }
    useEffect(() => {
        var retPattern = '';
        for (var i = 0; i <= 6; i++) {
            retPattern += "<div>";
            for (var j = 0; j <= 18; j++) {
                if (j === i) {
                    retPattern += "<span class='star star-green'>*</span>";
                }
                else if((i + j === 12 && i > 2)){
                    retPattern += "<span class='star star-orange'>*</span>";

                }
                else if((j - i === 6 && i > 2)){
                    retPattern += "<span class='star star-yellow'>*</span>";
                }
                else if((i + j === 18)){
                    retPattern += "<span class='star star-pink'>*</span>";
                }
                else {
                    retPattern += "<span class='space'>_</span>";
                }
            }
            retPattern += "</div>";
        }
        setPattern(retPattern);
    }, [pattern])

    return (
        <div>
            <div title="Click me to see the code and explaination" className='pointer' onClick={handleClick} dangerouslySetInnerHTML={{ __html: pattern }}>
            </div>
            {showCode && <ExplanationComponent data={data} />}
        </div>
    )
}