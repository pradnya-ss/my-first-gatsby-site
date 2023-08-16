import * as React from 'react'
import {Link} from 'gatsby'
import Greeting from "../components/greeting"


const SayHello = () => {
  return(
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/say-hello">Say Hello</Link></li>
      </ul>
      <Greeting name="Pradnya" />
      <Greeting name="Leena" />
      <Greeting name="Shubham" />
      <Greeting name="Mohsin" />
      <Greeting name="Dhyani" />
    </div>
  )
} 

export default SayHello