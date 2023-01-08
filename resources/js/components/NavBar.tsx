import React from 'react'
import { Link } from 'react-router-dom'

const navBarStyle: React.CSSProperties = {
    display: 'flex',
    width: '100%',
    padding: '8px',
    textAlign: 'left',
    fontSize: '16px',
    columnGap: '8px',
    height: '40px'
}

export const NavBar = () => {
    return (
        <div style={navBarStyle}>
            <Link to='/tasks' >Tasks</Link>
            <Link to='/help' >Help</Link>
            <Link to='/login' >Login</Link>
        </ div>
    )
}
