import { gql, useQuery } from '@apollo/client';
import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom';
import { GET_PERSON_DETAILS } from '../gql/queries';

function PeopleDetails() {
    const { personId } = useParams();

    const { loading, error, data } = useQuery(
        gql`
          ${GET_PERSON_DETAILS}
        `,
        {
            variables: {
                "personId": personId
            },
        }
    );


    if (loading) return <><p >Loading...</p>
        <div className='loader'></div></>;
    if (error) return <p>Error Occurred</p>;

    const {
        name,
        gender,
        height,
        skinColor,
        homeworld,
        filmConnection
    } = data.person;

    let films = filmConnection.films?.map(film => { return film.title });



    return (
        <div className='movies-component'>
            <p>Star Wars Personalities</p>
            <div className='backbutton'>
                <Link to="/Person">
                    <Button variant="outline-primary">Back</Button>
                </Link>
            </div>

            <div className='people-table'>
                <table>

                    <tbody>

                        <tr  >
                            <td>Name</td>
                            <td>{name}</td>
                        </tr>
                        <tr  >
                            <td>Gender</td>
                            <td>{gender}</td>
                        </tr>
                        <tr  >
                            <td>Height</td>
                            <td>{height}</td>
                        </tr>
                        <tr  >
                            <td>Skin Color</td>
                            <td>{skinColor}</td>
                        </tr>
                        <tr  >
                            <td>Homeworld</td>
                            <td>{homeworld.name}</td>
                        </tr>
                        <tr  >
                            <td>Films</td>
                            <td>{films.join(', ')}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default PeopleDetails;