import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import './input.css'

const InputForm = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [country, setCountry] = useState("")
    const [address, setAddress] = useState("")
    const [personal_inf, setPersonal_inf] = useState([])
    const [newReview, setNewReview] = useState("")
    useEffect(() => {
        Axios.get("http://localhost:3001/api/get").then((response) => {
            setPersonal_inf(response.data)
        })
    }, [])
    const submitReview = () => {
        Axios.post("http://localhost:3001/api/insert", { Name: name, Age: age, Country: country, Address: address })
            .then(() => {
                setPersonal_inf([...personal_inf, personal_inf])
            })
    }
    const delete_review = (movie) => {
        Axios.delete(`http://localhost:3001/api/delete/${movie}`)
    }
    const update_review = (movie) => {
        Axios.put("http://localhost:3001/api/update", {
            Country: newReview, Name: movie
        });
        setNewReview("")
    }
    return (
        <div className='movie'>
            <h1>Personnal informations</h1>
            <form action="">
                <label htmlFor="movieName">Name:</label>
                <input type="text" name='movieName' onChange={(e) => { setName(e.target.value) }} />
                <label htmlFor="review">Age:</label>
                <input type="text" name='review' onChange={(e) => { setAge(e.target.value) }} />
                <label htmlFor="country">Country:</label>
                <input type="text" id='country' onChange={(e) => { setCountry(e.target.value) }} />
                <label htmlFor="address">Address:</label>
                <input type="text" name='address' id='iddress' onChange={(e) => { setAddress(e.target.value) }} />
                <button onClick={submitReview}>submit</button>
                <div className='display_list' > {personal_inf.map((val) => {
                    return <div className='movie_review'>
                        <h3>Name:{val.Name}</h3>
                        <p>Age: {val.Age}</p>
                        <p>Country: {val.Country}</p>
                        <p>Address: {val.Address}</p>
                        <button onClick={() => { delete_review(val.Name) }}>delete</button>
                        <input type="text" onChange={(e) => { setNewReview(e.target.value) }} />
                        <button onClick={() => { update_review(val.Name) }}>update</button>
                    </div>
                })}</div>
            </form >

        </div >
    )
}

export default InputForm
