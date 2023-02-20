import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ExplanationComponent from '../../../ExplanationComponent/ExplanationComponent';
import { data } from './data';

export default function PatternK() {
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
                if (j === 0) {
                    retPattern += "<span class='star star-red'>*</span>";
                }
                else if (i + j === 4) {
                    retPattern += "<span class='star star-green'>*</span>";
                }
                else if(i - j === 2){
                    retPattern += "<span class='star star-orange'>*</span>";
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
            <div onClick={handleClick} dangerouslySetInnerHTML={{ __html: pattern }}>
            </div>
            {showCode && <ExplanationComponent data={data} />}
        </div>
    )
}