import './navbar.css'
import {Link} from 'react-router-dom'

import React from 'react'

function Navbar() {
    return (
        <div className="containera">
        <li className="lst"><Link class="txt" to='/Main'>Checkout</Link></li>
        <li className="lst"><Link class="txt" to='/Details'>Details</Link></li>
        <li className="lst"><Link class="txt" to='/Login'>Logout</Link></li>
        <div className="searchh">
            <input type="text" name="search"  id="srch" placeholder="search here"/>
        </div>
        {/* <div className="welcome">Welcome !!! </div> */}
    </div>
    )
}

export default Navbar
