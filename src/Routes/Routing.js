import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Card from '../Components/Card'
import Pagination from '../Components/Pagination'
import TodoList from '../Components/TodoList'

function Routing() {
  return (
    <Routes>
        <Route path='/pagination' element={< Pagination/>}/>
        <Route path='/Todolist' element={<TodoList/>}/>
        <Route path='/Card/:id' element = {<Card/>}/>
    </Routes>
  )
}

export default Routing