import React from 'react';
import '../styles/home.css';
const Card = React.lazy(() => import('../components/Card'));  //Component Lazy Loading

export default function Home() {
    const cardsData = [
        { id: '1', name: 'Movies', content: 'Movies in Star Wars Universe', path: '/Movies' },
        { id: '2', name: 'Pesonalities', content: 'An individual person or character within the Star Wars universe', path: '/Person' },
        { id: '3', name: 'Starships', content: 'A single transport craft that has hyperdrive capability', path: '/StarShips' }
    ]
    return (
        <div>
            <p>Welcome to Star Wars</p>
            <h6>Note : Lazy Loading Example</h6>

            <ul className='cards-container'>
                {cardsData.map(data => {
                    return <li key={data.id}>
                        <React.Suspense fallback={<div>Loading ...</div>} >
                            <Card data={data} />
                        </React.Suspense>
                    </li>
                })}
            </ul>

        </div>
    )
}
