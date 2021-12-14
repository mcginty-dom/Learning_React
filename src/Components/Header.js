import React from 'react'
import Navigation from './Navigation'

function Header() {
    return (
        <>
            <header className="border-b p-3 flex justify-between items-center">
                <h2 className="font-bond">
                    Learning React
                </h2>
            </header>
            <Navigation />
        </>
    )
}

export default Header;