import React from 'react';
import Card from '../components/Card';
import '../styles/home.css';

export default function Home() {
    const cardsData = [
        { id: '1', name: 'Movies', content: 'Movies and characters in Star Wars Universe', path: '/Movies' },
        { id: '2', name: 'Pesonalities', content: 'An individual person or character within the Star Wars universe', path: '/Person' },
    ]
    return (
        <div>
            <p>Welcome to Star Wars</p>

            <ul className='cards-container'>
                {cardsData.map(data => {
                    return <li key={data.id}>
                        <Card data={data} />
                    </li>
                })}
            </ul>

        </div>
    )
}
