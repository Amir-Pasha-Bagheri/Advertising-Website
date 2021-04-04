import React, { Component } from "react";
import './Homepage.css'
import {Link} from 'react-router-dom'
import placeholder from "./Image/placeholder.png"
import shirt from './Image/Shirt.jpg'
import { connect } from 'react-redux'
import history from "../../history";
import Post from '../Post/Post' 


class Homepage extends Component {
    render(){
        const SignInClick = () =>{
            this.props.status.currentUser===undefined? history.push('/Create-Account'): history.push('/Account')
        }
        return(
            <React.Fragment>
                <ul className="Navbar">
                    <Link to="/"><li className="Brand rounded" title="Name Of Website">Website</li></Link>
                    <Link to="/"><li className="NavLink rounded" style={{color:"#cbce91ff"}}>Home 🏠</li></Link>
                    <Link to="/Add-Product" ><li className="NavLink rounded">Add Your Product ✔</li></Link>
                    <Link to="/Contact-Us"><li className="NavLink rounded">Contact Us ☎</li></Link>
                    <li className="NavLink rounded" onClick={SignInClick}>{this.props.status.currentUser===undefined? 'Sign In 🙍‍♂️': this.props.status.currentUser}</li>
                </ul>

                {this.props.status.currentUser===undefined ? 
                <div className="SuggestAccount">
                    <h4>Create Account To Sell Your Own Products</h4>
                    <Link to="/Create-Account"><h5>Create Account</h5></Link>
                    <h6>Already Have An Account ?  <Link to="/Log-In">Click Here</Link></h6>
                </div>:
                false}

                <div>
                    <table className="Type">
                        <tbody>
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
                        </tbody>
                    </table>
                </div>
                <div id="page1">
                    {this.props.status.posts.map((post,index)=><Post key={index} name={post.name} price={post.price} img={post.img} description={post.description} date={post.date}/>)}
                    <div className="Post">
                        <header>
                            <h5 className="Name" title="Name Of Product">Clothes</h5>
                            <span className="Time badge" title="Date">2021/4/4</span>
                        </header>
                        <div className="Body">
                            <img src={shirt} alt="Default" title="Image" loading="lazy"/>
                            <div className="Description" title="Description">
                                This Is My Sister's Shirt.
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

const mapStateToProps = state =>{
    const status = state
    return {status}
  }

export default connect(mapStateToProps)(Homepage)