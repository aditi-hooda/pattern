import React from 'react';

export default function ExplanationComponent(props) {
    return (
        <div>
            <pre>
                <code>{props.code}</code>
            </pre>
        </div>

    )

}