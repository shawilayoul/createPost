import { useState, useEffect } from 'react'
import "../creates/post.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const [dislyList, setDisplayList] = useState([])
    let navigate = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:3001/api//get").then((response) => {
            setDisplayList(response.data)
        })
    }, [])
    return (
        <div className='post_review'>
            {dislyList.map((value, key) => {
                return <div className='post' key={key.id} onClick={() => { navigate(`/post/${value.id}`) }}>
                    <h2>{value.Name}</h2>
                    <p>{value.Age}</p>
                    <p>{value.Country}</p>
                    <p>{value.Address}</p>
                </div>
            })}
        </div>
    )
}

export default Home
