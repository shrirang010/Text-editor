import './Projectinfo.css'
import React from 'react'
export default function Projectinfo() {
  return (
    <div className='ms-4 me-4 mt-4' style={{textAlign:"center"}}>
    <h1  className="bg-dark rounded-pill text-light ms-5 me-5 mb-5" style={{fontFamily:"initial"}}>Project information</h1>
    <div className='d-lg-flex flex-col justify-content-center fs-4 mt-5 bg-info rounded-5' id="main">
      <main>
      <p>
        The purpose of this project was to learn about React library <br/>
        Things I learned through this project:
        <ul className='fw-lighter text-dark'>
            <li>Using React components to modify  and build a website</li>
            <li>props</li>
            <li>useState</li>
            <li>React router</li>
        </ul>
      </p>
      </main>
    </div>
    </div>
  )
}
