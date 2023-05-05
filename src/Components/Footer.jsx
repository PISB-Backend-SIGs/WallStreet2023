import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer className="fixed-bottom footer">
                <div className="container text-center">
                    <NavLink className="text-decoration-none" to='/team'><p className="mb-0 text-light">Designed & developed by - Web Team</p></NavLink>
                </div>
            </footer>

        </div>
    )
}

export default Footer