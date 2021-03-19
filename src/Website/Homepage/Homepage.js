import React, { Component } from "react";
import './Homepage.css'

class Homepage extends Component {
    render(){
        return(
            <React.Fragment>
                <ul className="Navbar">
                    <li><a href="/#" className="Brand rounded">Website</a></li>
                    <li><a href="/#" className="NavLink rounded">Home</a></li>
                    <li><a href="/#" className="NavLink rounded">News</a></li>
                    <li><a href="/#" className="NavLink rounded">Contact Us</a></li>
                    <li><a href="/#" className="NavLink rounded">About Us</a></li>
                </ul>
            </React.Fragment>
        )
    }
}

export default Homepage