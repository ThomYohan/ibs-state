import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {

    render() {
        return (
            <div className="Nav">
                <div className="Landing">
                    <Link to='/'>
                        <h2>Home</h2>
                    </Link>
                </div>
                <div className="Portfolio">
                    <Link to='/portfolio'>
                        <h2>Portfolio</h2>
                    </Link>
                </div>
                <div className="Team">
                    <Link to='/team'>
                        <h2>Meet The Team</h2>
                    </Link>
                </div>
                <div className="Contact">
                    <Link to='/contact'>
                        <h2>Contact</h2>
                    </Link>
                </div>
            </div>
        )
    }

}

export default Nav