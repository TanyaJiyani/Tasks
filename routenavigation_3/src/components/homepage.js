import React, { useEffect, useState } from "react";
import '../App.css';
import {
    Link
} from "react-router-dom";
export default function Homepage() {
    const [loading, setLoading] = useState(true)
    const [characterData, setCharactersData] = useState([])

    const fetchCharactersData = () => {
        setLoading(true)
        fetch('https://api.disneyapi.dev/characters')
            .then((response) => {
                return response.json()
            }).then((data) => {
                setCharactersData(data.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchCharactersData()
    }, [])

    const renderMovieList = characterData?.map(char => {
        return (
            <li>
                <Link to={`/profile/${char['_id']}/${char['name']}`}>
                    <img src={char.imageUrl} alt={char.name} />
                    <div className="overlay"><span>{char.name}</span></div>

                </Link>
            </li>

        )
    })
    return (
        <div className="home-component">
            <p>Disney Characters</p>
            {loading ? <div class="loader"></div> :
                <ul className="image-gallery">  {renderMovieList}</ul>
            }
        </div>
    )
}