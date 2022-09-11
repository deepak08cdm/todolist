import React,{ useEffect, useState } from 'react'

function Button(props) {
    const [number, setNumber] = useState(0)
    const [antiNumber, setAntiNumber] = useState(0)
    const handleClick = ()=>{
        setNumber(number+1)
    }
    useEffect(()=>{
        //componentdidmount
        console.log('inside useeffect componentdidmount')
        return ()=>{
            console.log('bye bye')
        }
    },[])
    const handleAntiClick = (e)=>{
        console.log(e.target)
        setAntiNumber(antiNumber-1)
    }
  return (
    <>
    <h1>{props.value}</h1>
    {/* {console.log('inside return jsz=x')} */}
    <div>{number}, {antiNumber}</div>
    <button onClick={handleClick}>change</button>
    <button onClick={handleAntiClick}>change anti</button>
    <input onChange={(e)=>{props.changeName(e.target.value)}} value={props.name}/>
    </>
  )
}

export default Button


/**
 * useEffect/ lifeCycle methods 
 * 
 * 3phase = mounting phase/ updating phase/ unmount phase
 * componentdidmount / componentdidupdate/ componentwillunmount 
 * 
 * useEffect is a hook used to implement lifecycle methods inside react functional component
 */