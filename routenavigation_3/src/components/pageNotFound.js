import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
    return (
        <div className='home-component '>
            <p>Page Not Found</p>
            <Link to={`/`}>
                <button data-testid="pnf-backbtn">Go to Homepage</button>
            </Link>
        </div>
    )
}
