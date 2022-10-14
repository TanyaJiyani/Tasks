import { gql, useQuery } from '@apollo/client';
import Button from 'react-bootstrap/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import { GET_ALL_FILMS } from '../gql/queries';
import '../styles/movies.css';

export default function Movies() {
    const { data, loading, error } = useQuery(gql`${GET_ALL_FILMS}`);

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
                                    <th>Title</th>
                                    <th>Director</th>
                                    <th>Producers</th>
                                    <th>Release Date</th>

                                </tr>
                            </thead>
                            <tbody>
                                {data.allFilms.films.map((film) => (
                                    <tr
                                        key={film.id}
                                        // onClick={() => navigate(`/movies/${film.id}`)}
                                        className="movie-row"
                                    >
                                        <td>{film.title}</td>
                                        <td>{film.director}</td>
                                        <td>{Array.isArray(film['producers']) ? film['producers'].join(', ') : film['producers']}</td>
                                        <td>{film.releaseDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    )
}
