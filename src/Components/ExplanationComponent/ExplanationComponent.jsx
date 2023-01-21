import React from 'react';
import { images } from '../../Assets';

export default function ExplanationComponent(props) {

    const copyToClipboard = async (e) => {
        try {
            await navigator.clipboard.writeText(props.code);
            console.log('Text copied to clipboard');
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    }

    return (
        <div className='explanation-container'>
            <div className="header">
                <button className="btn-copy" onClick={copyToClipboard}>
                    <img src={images.copyimg}/>
                    Copy code
                </button>
            </div>
            <pre className='code' title='Click me to see the explaination of this code'>
                <code>{props.data.code}</code>
            </pre>
            <div className='explanation'>
                {props.data.explaination}
            </div>
        </div>

    )

}