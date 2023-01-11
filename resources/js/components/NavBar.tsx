import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/AuthContext'
import { useLogout, useUser } from '../queries/AuthQuery'

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
    const { isAuth } = useAuth();
    const logout = useLogout();

    const handleLogout = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        logout.mutate();
    }
    return (
        <div style={navBarStyle}>

            {isAuth
                ? <><Link to='/tasks' >Tasks</Link><a href="" onClick={handleLogout}>Logout</a></>
                : <Link to='/login' >Login</Link>
            }
            <Link to='/help' >Help</Link>
        </ div>
    )
}
