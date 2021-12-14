import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
    const [showMenu, setShowMenu] = useState(false)    
    let menu

    if(showMenu) {
        menu = 
        <div className="fixed bg-white top-0 left-0" onClick={() => setShowMenu(false)}>
            <ul> 
          <li>
            <Link to="/" className="text-blue-500" onClick={() => setShowMenu(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-blue-500"onClick={() => setShowMenu(false)}>About</Link>
          </li>
        </ul>
        </div>
    }

    return (
        <nav>
            <button onClick={() => setShowMenu(!showMenu)}>
            Menu
            {showMenu ? 
                <i class="glyphicon glyphicon-minus"></i> : 
                <i class="glyphicon glyphicon-plus"></i>}
            </button>
            {menu}
        </nav>
    )
}

export default Navigation;