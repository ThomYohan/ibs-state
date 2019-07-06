import React, { Component } from 'react'
// import { connect } from 'react-redux'
import './Landing.css'


class Landing extends Component {


    render() {
        return (
            <div className='Home'>
                <div className="navPlaceholder">
                    {/* <h1>Home</h1> */}
                </div>
                <div className="contentBox">
                    <div className="about">
                        <div className="aboutBox">aboutBox</div>
                    </div>
                    <div className="ybox">
                        <div className="whyBox"></div>
                        <button className="workButton">Want to work with us?</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing