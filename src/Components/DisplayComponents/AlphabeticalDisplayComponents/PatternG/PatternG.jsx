import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { images } from '../../../../Assets';
import ExplanationComponent from '../../../ExplanationComponent/ExplanationComponent';
import { data } from './data';

export default function PatternG() {
    let [pattern, setPattern] = useState('');
    let [showCode, setshowCode] = useState(false);
    function handleClick() {
        setshowCode(!showCode);
    }
    useEffect(() => {
        var retPattern = '';
        for (var i = 0; i <= 6; i++) {
            retPattern += "<div>";
            for (var j = 0; j < 5; j++) {
                if (i === 0 || i === 6 || (i===3 && j>1)) {
                    retPattern += "<span class='star star-red'>*</span>";
                }
                else if (j === 0 || (j === 4 && i>3)) {
                    retPattern += "<span class='star star-blue'>*</span>";
                }
                else {
                    retPattern += "<span class='space'>_</span>";
                }
            }
            retPattern += "</div>";
        }
        setPattern(retPattern);
    },[pattern])

    return (
        <div>
            <div title="Click me to see the code and explaination" className='pointer' onClick={handleClick} dangerouslySetInnerHTML={{ __html: pattern }}>
            </div>
            {showCode && <ExplanationComponent data={data} image={images.g}/>}
        </div>
    )
}