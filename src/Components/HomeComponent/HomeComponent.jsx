import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeComponent() {

    return (
        <div>
            <div className='large-text'>
                This webiste will help you build logic using patterns
            </div>
            <div className='container'>
                <div className="row">
                    <Link to='/triangular-pattern' className='patterns-link'>
                        <div className='patterns patterns-triangular'>
                            Triangular Patterns
                        </div>
                    </Link>
                    <Link to='/alphabetical-pattern' className='patterns-link'>
                        <div className='patterns patterns-alphabetical'>
                            Alphabetical Patterns
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )

}