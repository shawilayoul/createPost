import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Post = () => {
    let { id } = useParams()
    const [posts, setPost] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:3001/api/getById/${id}`).then((response) => {
            setPost(response.data
            )
        }).catch((err) => {
            console.log(err);
        })
    }, [id])
    return (
        <div>
            {
                <div className='post_list'>
                    <p className='title'>{posts.Name}</p>
                    <p className='post'>{posts.Age}</p>
                    <p className='user'>{posts.Country}</p>
                    <p className='user'>{posts.Address}</p>
                </div>
            }
        </div>
    )
}

export default Post