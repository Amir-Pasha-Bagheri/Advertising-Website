import React, { Component } from "react";
import './Homepage.css'
import {Link} from 'react-router-dom'
import placeholder from "./Image/placeholder.png"


class Homepage extends Component {
    render(){
        return(
            <React.Fragment>
                <ul className="Navbar">
                    <Link to="/"><li><a href="/#" className="Brand rounded" title="Name Of Website">Website</a></li></Link>
                    <Link to="/"><li><a href="/#" className="NavLink rounded" style={{color:"#cbce91ff"}}>Home 🏠</a></li></Link>
                    <Link to="/Add-Product" ><li><a href="/#" className="NavLink rounded">Add Your Product ✔</a></li></Link>
                    <Link to="/Contact-Us"><li><a href="/#" className="NavLink rounded">Contact Us ☎</a></li></Link>
                    <Link to="/Create-Account"><li><a href="/#" className="NavLink rounded">Sign In 🙍‍♂️</a></li></Link>
                </ul>

                <div className="SuggestAccount">
                    <h4>Create Account To Sell Your Own Products</h4>
                    <Link to="/Create-Account"><h5><a href="/#">Create Account</a></h5></Link>
                    <h6>Already Have An Account ?  <Link to="/Log-In"><a href="/#">Click Here</a></Link></h6>
                </div>

                <div>
                    <table class="Type">
                        <tr>
                            <td className="HeaderTable"><h5>Price</h5></td>
                        </tr>
                        <tr>
                            <td title="Cheap To Expensive">Down To Up</td>
                        </tr>
                        <tr>
                            <td title="Expensive To Cheap">Up To Down</td>
                        </tr>
                        <tr>
                            <td className="HeaderTable"><h5>Date</h5></td>
                        </tr>
                        <tr>
                            <td title="Recent Products">Newest</td>
                        </tr>
                        <tr>
                            <td title="Latest Products">Oldest</td>
                        </tr>
                    </table>
                </div>
                <div id="page1">
                    <div className="Post">
                        <header>
                            <h5 className="Name" title="Name Of Product">Shoes</h5>
                            <span className="Time badge" title="Date">2021/3/24</span>
                        </header>
                        <div className="Body">
                            <img src={placeholder} alt="Default" title="Image" loading="lazy"/>
                            <div className="Description" title="Description">
                                These Are My Blue Shoes Wich I Really Love Them...
                            </div>
                            <button className="More">More Details And Negotiation</button>
                            <button className="PriceButton" disabled>36 $</button>
                        </div>
                        <hr/>
                    </div>

                    <div className="Post">
                        <header>
                            <h5 className="Name" title="Name Of Product">Shoes</h5>
                            <span className="Time badge" title="Date">2021/3/24</span>
                        </header>
                        <div className="Body">
                            <img src={placeholder} alt="Default" title="Image" loading="lazy"/>
                            <div className="Description" title="Description">
                                These Are My Blue Shoes Wich I Really Love Them...
                            </div>
                            <button className="More">More Details And Negotiation</button>
                            <button className="PriceButton" disabled>50 $</button>
                        </div>
                        <hr/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Homepage