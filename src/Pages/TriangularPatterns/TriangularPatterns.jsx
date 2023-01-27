import React, { useState } from 'react';
import { useEffect } from 'react';
import { Triangle1, Triangle2 } from '../../Components/DisplayComponents/TriangularDisplayComponents';

export default function TriangularPatterns() {
    const components = {
        'Triangle1': Triangle1,
        'Triangle2': Triangle2,
    }
    const [componentList, setcomponentList] = useState([]);

    useEffect(() => {
        var retComponents = [];
        for (var i = 1; i <= 2; i++) {
            const name = 'Triangle' + i;
            const TheIcon = components[name];
            retComponents.push(<TheIcon/>);
            retComponents.push('break');
            // retComponents += <TheIcon />
        }
        setcomponentList(retComponents);
    }, componentList);

    return (
        <>
            {componentList && componentList.map((val, index) => {
                if (val === 'break') {
                    return (<div className='break-line' key={index}></div>)
                }
                return (
                    <div key={index} className='triangle'>
                        {val}
                    </div>);
            })}
        </>
    )

}
