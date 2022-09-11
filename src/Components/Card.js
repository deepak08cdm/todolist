import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

function Card() {
    const [data,setData] = useState({})
    const params = useParams()
    useEffect(()=>{
        fetchData()
    })
    const fetchData = async()=>{
        const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        setData(result.data)
    }
  return (
    <div>
        <h1>{data?.title}</h1>
        <h3>{data?.body}</h3>
        {params.id}
    </div>
  )
}

export default Card