import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div>
        <h1>Logo</h1>
        <ul>
           
            <li>
                <Link to='/login'>Login</Link>
            </li>
            <li>
                <Link to='/signup'>Signup</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar