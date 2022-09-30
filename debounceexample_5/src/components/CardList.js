import React from 'react';
import './cardList.css';

export default function CardList({ cardData, loading }) {
    const renderMovieList = cardData?.map(row => {
        return (
            <li key={row._id} data-testid="list-item">

                <img src={row.imageUrl} alt={row.name} />
                <div className="overlay"><span>{row.name}</span></div>

            </li>

        )
    })
    return (
        <div className="home-component">
            {loading ? <div className="loader" data-testid="loader"></div> :
                cardData?.length === 0 ? <p>No Data Found</p> : <ul className="image-gallery" data-testid="card-list">  {renderMovieList}</ul>
            }
        </div>
    )
}
