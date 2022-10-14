import { gql, useQuery } from '@apollo/client';
import Button from 'react-bootstrap/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import { GET_ALL_STARSHIPS } from '../gql/queries';
import '../styles/movies.css';

export default function Starships() {
    const { data, loading, error } = useQuery(gql`${GET_ALL_STARSHIPS}`);

    return (
        <div className='movies-component'>
            <p>Star Wars Movies</p>
            <div className='backbutton'>
                <Link to="/">
                    <Button variant="outline-primary">Back</Button>
                </Link>
            </div>
            {loading ? <><p >Loading...</p>
                <div className='loader'></div></> :
                error ? <p>Error Occurred</p> :
                    <div className='table-style'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Ship Name</th>
                                    <th>Consumables</th>
                                    <th>Cost in Credits</th>
                                    <th>Creation Date</th>
                                    <th>Crew</th>
                                    <th>Model</th>
                                    <th>Pilot(s)</th>
                                    <th>Movies Used</th>

                                </tr>
                            </thead>
                            <tbody>
                                {data.allStarships.starships.map((ship) => (
                                    <tr
                                        key={ship.id}
                                        className="movie-row"
                                    >
                                        <td>{ship.name}</td>
                                        <td>{ship.consumables}</td>
                                        <td>{ship.costInCredits}</td>
                                        <td>{ship.created}</td>
                                        <td>{ship.crew}</td>
                                        <td>{ship.model}</td>
                                        <td>{ship.pilotConnection.totalCount}</td>
                                        <td>{ship.filmConnection.films?.map(film => { return film.title }).join(', ')}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    )
}
