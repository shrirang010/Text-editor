import React from 'react'
import './About.css'

export default function About(props) {
  return (
    <div className='mt-4  bg-info text-light mt-5 ms-4 me-4 rounded'id='aboutbox' style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center",height:"100%",fontSize:"20px",fontWeight:"900"}}>
      <h1 className='text-primary'>{`About ${props.title}`}</h1>
      <p className='mt-3 text-dark ms-3 me-3'>
        This is a text editor which can carry out variety of tasks<br/>
        Text editor has the following features
        <ul>
            <li>convert text to Uppercase</li>
            <li>convert text to Lowerase</li>
            <li>Copy text</li>
        </ul>
      </p>
    </div>
  )
}
