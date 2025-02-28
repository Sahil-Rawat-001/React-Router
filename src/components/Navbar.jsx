import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>

       <h1>React-Router</h1>

        <ul>
            <Link to= '/'><li>Home</li></Link>
            <Link to= '/Products'><li>Products</li></Link>
            <Link to= '/About'><li>About</li></Link>
            <Link to= '/Contact'><li>Contact</li></Link>
        </ul>

        <button>Get Started</button>
    </div>
  )
}

export default Navbar