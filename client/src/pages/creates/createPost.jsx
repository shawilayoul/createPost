import React, { useState } from 'react'
import axios from "axios"
import "./post.css"

const CreatePost = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [country, setCountry] = useState("")
    const [address, setAddress] = useState("")

    const submit_post = () => {
        axios.post("http://localhost:3001/api/insert", { Name: name, Age: age, Country: country, Address: address })
            .then((response) => {
                console.log(response)
            })
    }
    return (
        <div className='forms'>
            <form action="#">
                <h1>Create A post</h1>
                <label htmlFor="name">Name :</label>
                <input type="text" id='name' name='name' onChange={(e) => { setName(e.target.value) }} />
                <label htmlFor="age">Age :</label>
                <input type="text" id='age' name='age' onChange={(e) => { setAge(e.target.value) }} />
                <label htmlFor="country">Country:</label>
                <input type="text" id='country' name='country' onChange={(e) => { setCountry(e.target.value) }} />
                <label htmlFor="address">Address:</label>
                <input type="text" id='address' name='address' onChange={(e) => { setAddress(e.target.value) }} />
                <button onClick={submit_post}>Add a post</button>
            </form>

        </div>
    )
}

export default CreatePost
