import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
    return (
        <div className='home-component '>
            <p>Page Not Found</p>
            <Link to={`/`}>
                <Button variant="outline-primary">Go to Homepage</Button>
            </Link>
        </div>
    )
}
