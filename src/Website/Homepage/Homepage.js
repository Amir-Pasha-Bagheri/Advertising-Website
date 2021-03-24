import React, { Component } from "react";
import './Homepage.css'
import placeholder from "./Image/placeholder.png"


class Homepage extends Component {
    render(){
        return(
            <React.Fragment>
                <ul className="Navbar">
                    <li><a href="/#" className="Brand rounded" title="Name Of Website">Website</a></li>
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
                            <img src={placeholder} alt="Default" title="Image"/>
                            <div className="Description" title="Description">
                                These Are My Blue Shoes Wich I Really Love Them...
                                My name is barry allen and im the fastest man alive when i was a child my mother killed with something impossible
                            </div>
                            <button className="More">More Details</button>
                            <button className="Negotiation">Negotiation</button>
                        </div>
                        <hr/>
                    </div>
                    <div className="Post">
                        <header>
                            <h5 className="Name" title="Name Of Product">Shoes</h5>
                            <span className="Time badge" title="Date">2021/3/24</span>
                        </header>
                        <div className="Body">
                            <img src={placeholder} alt="Default" title="Image"/>
                            <div className="Description" title="Description">
                                These Are My Blue Shoes Wich I Really Love Them...
                                My name is barry allen and im the fastest man alive when i was a child my mother killed with something impossible
                            </div>
                            <button className="More">More Details</button>
                            <button className="Negotiation">Negotiation</button>
                        </div>
                        <hr/>
                    </div><div className="Post">
                        <header>
                            <h5 className="Name" title="Name Of Product">Shoes</h5>
                            <span className="Time badge" title="Date">2021/3/24</span>
                        </header>
                        <div className="Body">
                            <img src={placeholder} alt="Default" title="Image"/>
                            <div className="Description" title="Description">
                                These Are My Blue Shoes Wich I Really Love Them...
                                My name is barry allen and im the fastest man alive when i was a child my mother killed with something impossible
                            </div>
                            <button className="More">More Details</button>
                            <button className="Negotiation">Negotiation</button>
                        </div>
                        <hr/>
                    </div><div className="Post">
                        <header>
                            <h5 className="Name" title="Name Of Product">Shoes</h5>
                            <span className="Time badge" title="Date">2021/3/24</span>
                        </header>
                        <div className="Body">
                            <img src={placeholder} alt="Default" title="Image"/>
                            <div className="Description" title="Description">
                                These Are My Blue Shoes Wich I Really Love Them...
                                My name is barry allen and im the fastest man alive when i was a child my mother killed with something impossible
                            </div>
                            <button className="More">More Details</button>
                            <button className="Negotiation">Negotiation</button>
                        </div>
                        <hr/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Homepage