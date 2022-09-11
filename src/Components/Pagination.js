import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from './Table'
import Pages from './Pages'

function Pagination() {
    const [userData, setUserData] = useState([])
    const [noOfPages, setNoOfPages] = useState(0)
    const [perPageData, setPerPageData] = useState([])
    // const fetchData = async()=>{
    //     const result = await fetch('https://jsonplaceholder.typicode.com/users',{method:['GET']})
    //     const data = await result.json()
    //     setUserData(data)
    // }
    const dataPerPage = 10
    let nopages = []
    const fetchData = async()=>{
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setUserData(result.data)
        const npages = Math.ceil(result.data.length/dataPerPage)   // 10
        const arr = []
        for (let i = 1;i<=npages;i++){
            arr.push(i)
        } 
        // [1,2,3,4,5,6,7,8,9,10]
        setNoOfPages(arr)
        const initialData = result.data.slice(0,dataPerPage)
        setPerPageData(initialData)
    }

    useEffect(()=>{
        fetchData()
    },[])
    const handlePageData = (pageNo)=>{
        const startIndex = pageNo*dataPerPage - dataPerPage
        const endIndex = pageNo*dataPerPage
        const data = userData.slice(startIndex, endIndex)
        setPerPageData(data)
    }
  return (
    <>
        <Table data={perPageData}/>
        <Pages pages={noOfPages} handleClick = {handlePageData}/>
    </>
  )
}

export default Pagination


// page data, no of pages    12 per page                               startIndex = pageNo*12-12      endIndex = pageNo*12-1
// Math.ceil(userData/12)
// page 1 - 0-11      
// page 2 - 12-23 
// page 3 = 24-35
// page 4 = 36-47
// for calling rest api calls we use either axios or fetch   

// fetch is inbuilt inside js
// axios is a external library
