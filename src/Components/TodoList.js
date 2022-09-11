import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {addToList} from '../Redux/Actions'
import List from './List'

function TodoList() { 
    const [list, setList] = useState([])
    const [item, setItem] = useState('')
    const dispatch = useDispatch()
    const handleClick = ()=>{
        dispatch({type:'HELLO',payload:'hello'})
        dispatch(fetchData)
    }
    async function fetchData(diispatch, getState){
        const result = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(getState())
        diispatch(addToList({todoList:item,users:result.data}))
    }
    const Navigate = useNavigate()
  return (
    <div>
        <input type='text' onChange={(e)=>{setItem(e.target.value)}} value={item}/> 
        <button onClick={handleClick}>Add</button>
        {/* <ul>
            {list.map((element)=>{
                return(
                    <li>{element}</li>
                )
            })}
        </ul> */}
        <List/>
        <button onClick={()=>{Navigate('/pagination')}}>Navigate to Pagination</button>
    </div>
  )
}

export default TodoList