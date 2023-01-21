import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ExplanationComponent from '../../ExplanationComponent/ExplanationComponent';
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
                if (j === i || (i + j === 12 && i > 2) || (j - i === 6 && i > 2) || (i + j === 18)) {
                    retPattern += "<span class='star'>*</span>";
                }
                else {
                    retPattern += "<span class='space'> </span>";
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