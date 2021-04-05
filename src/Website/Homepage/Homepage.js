import React, { Component } from "react";
import './Homepage.css'
import {Link} from 'react-router-dom'
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
                                <td title="Cheap To Expensive">
                                    <Link to="Home-Page-DU" id="DU"
                                    style={{textDecoration:"none",color:'black'}}
                                    onMouseEnter={()=>document.getElementById('DU').style.color='rgb(185, 156, 212)'}
                                    onMouseLeave={()=>document.getElementById('DU').style.color='black'}>
                                    Down To Up</Link>
                                </td>
                            </tr>
                            <tr>
                                <td title="Expensive To Cheap">
                                    <Link to="Home-Page-UD" id="UD"
                                    style={{textDecoration:"none",color:'black'}}
                                    onMouseEnter={()=>document.getElementById('UD').style.color='rgb(185, 156, 212)'}
                                    onMouseLeave={()=>document.getElementById('UD').style.color='black'}>
                                    Up To Down</Link>
                                </td>
                            </tr>
                            <tr>
                                <td className="HeaderTable"><h5>Date</h5></td>
                            </tr>
                            <tr>
                                <td title="Recent Products" className="CurrentMode">Newest</td>
                            </tr>
                            <tr>
                                <td title="Latest Products">
                                    <Link to="Home-Page-O" id="O"
                                    style={{textDecoration:"none",color:'black'}}
                                    onMouseEnter={()=>document.getElementById('O').style.color='rgb(185, 156, 212)'}
                                    onMouseLeave={()=>document.getElementById('O').style.color='black'}>
                                    Oldest</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="page1">
                    {this.props.status.posts.map((post,index)=>
                    <Post key={index} name={post.name} price={post.price} img={post.img} description={post.description} date={post.date}/>)}
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