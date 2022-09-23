import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    Link
} from "react-router-dom";
import '../App.css'

export default function Details() {
    const { id, name } = useParams();
    const [loading, setLoading] = useState(true)
    const [characterDetail, setCharactersDetail] = useState([])

    const fetchCharactersDetails = () => {
        setLoading(true)
        fetch('https://api.disneyapi.dev/characters/' + id)
            .then((response) => {
                return response.json()
            }).then((data) => {
                setCharactersDetail(data);
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    };

    useEffect(() => {

        fetchCharactersDetails()
    }, [])

    const renderTableData = Object.keys(characterDetail)?.map(data => {
        return (
            (data !== 'imageUrl' && data !== 'name') ? <tr>
                <td>{data}</td>
                <td>{(characterDetail[data].length === 0 || characterDetail[data] === "") ? 'NA' : characterDetail[data]}</td>
            </tr> : null
        )
    })

    return (
        <div className="detail-component" data-testid=' detail-component'>
            <div className="detail-style">
                <p>Character Details {!loading ? `: ${name}` : null}
                </p>
                <Link to={`/`}>
                    <button>Back</button>
                </Link>
            </div>
            {loading ? <div class="loader"></div>
                :
                <>

                    <div className="detail-style" >
                        <img src={characterDetail.imageUrl} alt={characterDetail.name} />

                        <table>
                            <tr>
                                <td>name</td>
                                <td>{name}</td>
                            </tr>
                            {renderTableData}
                        </table>
                    </div></>
            }
        </div>
    )
}