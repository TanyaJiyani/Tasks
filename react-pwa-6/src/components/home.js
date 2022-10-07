import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

export default function home() {
    return (
        <div className='home-component'>
            <h1>Click to view more</h1>
            <Link to='/disneyCharacters'>
                <button>Disney Characters</button>
            </Link>
            <Link to='/users'>
                <button>Users</button>
            </Link>

            <p>Note : First Visit all Pages to cache Data</p>

        </div>
    )
}
