import { gql, useQuery } from '@apollo/client';
import Button from 'react-bootstrap/Button';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GET_ALL_PEOPLE } from '../gql/queries';
import '../styles/movies.css';

export default function People() {
    const navigate = useNavigate();
    const { data, loading, error } = useQuery(gql`${GET_ALL_PEOPLE}`);


    if (loading) return <><p >Loading...</p>
        <div className='loader'></div></>;
    if (error) return <p>Error Occurred</p>;

    return (
        <div className='movies-component'>
            <p>Star Wars Personalities</p>
            <div className='backbutton'>
                <Link to="/">
                    <Button variant="outline-primary">Back</Button>
                </Link>
            </div>

            <div className='table-style'>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Birth Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.allPeople.people.map((people) => (
                            <tr
                                key={people.id}
                                onClick={() => navigate(`/personDetails/${people.id}`)}
                            >
                                <td>{people.name}</td>
                                <td>{people.birthYear}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
