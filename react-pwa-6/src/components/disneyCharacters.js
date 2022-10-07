import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../styles/disneycharacters.css';

export default function DisneyCharacters() {
    const [loading, setLoading] = useState(true)
    const [characterData, setCharactersData] = useState([])
    const [mode, setMode] = useState('online')

    const fetchCharactersData = () => {
        setLoading(true)
        fetch('https://api.disneyapi.dev/characters')
            .then((response) => {
                return response.json()
            }).then((data) => {
                setCharactersData(data.data)
                setLoading(false)
                localStorage.setItem("characterData", JSON.stringify(data.data))
            })
            .catch(err => {
                setLoading(false)
                setMode('offline')
                let data = localStorage.getItem("characterData");
                setCharactersData(JSON.parse(data))
            })
    }

    useEffect(() => {
        fetchCharactersData()
    }, [])

    const renderMovieList = characterData?.map(char => {
        return (
            <li key={char?._id}>
                <img src={char.imageUrl} alt={char.name} />
                <div className="overlay"><span>{char.name}</span></div>
            </li>

        )
    })
    return (
        <div className="home-component">
            <p>Disney Characters</p>
            <div className='backbutton'>
                <Link to="/">
                    <button>Back</button>
                </Link>
            </div>
            <div className='mode-details'>
                {mode === 'offline' ?
                    <>You are in Offline Mode or Some issue Occurred</> :
                    <>You are in Online Mode</>}
            </div>
            {loading ? <div className="loader"></div> :
                <ul className="image-gallery">  {renderMovieList}</ul>
            }
        </div>
    )
}