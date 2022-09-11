import React from 'react'
import {useSelector} from 'react-redux'
function List() {
    const data = useSelector((state)=> state)
  return (
    <div>
        {data.todoList.map((element)=>{
            return (
                <h4>{element}</h4>
            )
        })}
    </div>
  )
}

export default List