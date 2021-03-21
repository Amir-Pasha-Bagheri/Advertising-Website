import React, { Component } from "react";
import './Homepage.css'

class Homepage extends Component {
    render(){
        return(
            <React.Fragment>
                <ul className="Navbar">
                    <li><a href="/#" className="Brand rounded">Website</a></li>
                    <li><a href="/#" className="NavLink rounded">Home 🏠</a></li>
                    <li><a href="/#" className="NavLink rounded">Add Your Product ✔</a></li>
                    <li><a href="/#" className="NavLink rounded">Contact Us ☎</a></li>
                    <li><a href="/#" className="NavLink rounded">About Us ⁉</a></li>
                </ul>
                <div className="SuggestAccount">
                    <h4>Create Account To Sell Your Own Products</h4>
                    <h5><a href="/#">Create Account</a></h5>
                    <h6>Already Have An Account ? <a href="/#">Click Here</a></h6>
                </div>
            </React.Fragment>
        )
    }
}

export default Homepage