import React from 'react'
import {useNavigate} from 'react-router-dom'
function Table(props) {
    const Navigate = useNavigate()
    const handleClick = (id)=>{
        Navigate(`/Card/${id}`)
    }
  return (
    <>
        {props.data.length > 0 && <table border={'2px solid white'}>
            <thead>
                <tr>
                    <th>user ID</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((element, index)=>{
                    return(
                        <>
                            <tr>
                                <td>{element.userId}</td>
                                <td>{element.id}</td>
                                <td>{element.title}</td>
                                <td><button onClick={()=>{handleClick(element.id)}}>open</button></td>
                            </tr>
                        </>
                    )
                })}
            </tbody>
        </table>}
    </>
  )
}

export default Table