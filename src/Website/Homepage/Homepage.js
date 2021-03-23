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
                <div>
                    <table class="Type">
                        <tr>
                            <td className="HeaderTable"><h5>Price</h5></td>
                        </tr>
                        <tr>
                            <td>Down To Up</td>
                        </tr>
                        <tr>
                            <td>Up To Down</td>
                        </tr>
                        <tr>
                            <td className="HeaderTable"><h5>Date</h5></td>
                        </tr>
                        <tr>
                            <td>Newest</td>
                        </tr>
                        <tr>
                            <td>Oldest</td>
                        </tr>
                    </table>
                </div>
                <div id="page1">
                </div>
            </React.Fragment>
        )
    }
}

export default Homepage