import React from 'react'
import "./intro.scss"

export default function Intro() {
  return (
    <div className='intro' id='intro'>
        <div className="left">
          <div className="imgContainer">
            <img src='assets/sajt3.jpeg'/>
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2> Welcome, I'm</h2>
            <h1> Nikolaj Šatara</h1>
            <h3>Programming | Music | Basketball<span></span></h3>
            <h4> (Suck in all three of those except if you're looking to hire me in which case I'm the expert baby)</h4>
          </div>
          <a href='#portfolio'>
           <img src="assets/down.png" alt="" />
          </a>
        </div>
    </div>
  )
}
