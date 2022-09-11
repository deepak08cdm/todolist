import React, { useEffect, useState } from 'react'

function Pages(props) {
    
  return (
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        {props.pages.length>0 && props.pages.map((each)=>{
            return (
                <>
                    <button onClick={(e)=>{props.handleClick(each)}}>{each}</button>
                </>
            )
        })}
    </div>
  )
}

export default Pages