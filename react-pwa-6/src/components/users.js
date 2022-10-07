import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/users.css';

export default function Users() {
    const [userData, setUserData] = useState()
    const [mode, setMode] = useState('online')

    useEffect(() => {
        let url = "https://jsonplaceholder.typicode.com/users";
        fetch(url).then((response) => {
            response.json().then((result) => {
                console.log(result)
                setUserData(result)
                localStorage.setItem("userData", JSON.stringify(result))
            })
        }).catch(err => {
            setMode('offline')
            let data = localStorage.getItem("userData");
            setUserData(JSON.parse(data))
        })
    }, [])


    const renderTableData = userData?.map(data => {
        return (
            <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data?.address?.street}</td>
            </tr>
        )
    })


    return (
        <div className='user-component'>
            <p>Users</p>
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
            <div className='table-style'>
                <table>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                    {renderTableData}
                </table>
            </div>
        </div>
    )
}
