import React, {Component} from 'react'
import './ContactUs.css'
import telegram from './Image/telegram.png'
import whatsapp from './Image/whatsapp.jpg'
import gmail from './Image/gmail.png'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import history from "../../history";

class ContactUs extends Component {
    render(){
        const SignInClick = () =>{
            this.props.status.currentUser===undefined? history.push('/Create-Account'): history.push('/Account')
        }
        return(
            <React.Fragment>
                <ul className="Navbar">
                    <Link to="/"><li><a href="/#" className="Brand rounded" title="Name Of Website">Website</a></li></Link>
                    <Link to="/"><li><a href="/#" className="NavLink rounded">Home 🏠</a></li></Link>
                    <Link to="/Add-Product" ><li><a href="/#" className="NavLink rounded">Add Your Product ✔</a></li></Link>
                    <Link to="/Contact-Us"><li><a href="/#" className="NavLink rounded" style={{color:"#cbce91ff"}}>Contact Us ☎</a></li></Link>
                    <li className="NavLink rounded" onClick={SignInClick}>{this.props.status.currentUser===undefined? 'Sign In 🙍‍♂️': this.props.status.currentUser}</li>
                </ul>
                <div className="Container">
                    <h5>Contact US</h5><hr/><br/>
                    Thank You For Checking Our Website.<br/>
                    I Hope You Like It.<br/><br/><br/>
                    Here Are Few Way Which You can Contact Us :<br/><br/>
                    <p className="SocialIcons"><img src={telegram} alt="Telegram" width="20px" height="20px"/> +98 937 345 2374</p>
                    <p className="SocialIcons"><img src={whatsapp} alt="Whatsapp" width="19px" height="19px"/> +98 937 345 2374</p>
                    You can text me in Whatsapp or Telegram.<br/>
                    Or send me e-mail.<br/><br/>
                    <p className="SocialIcons"><img src={gmail} alt="gmail" className="Gmail"/> a.p.bagheri83@gmail.com</p>
                    24 Hours available :)
                </div>
                <br/><br/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state =>{
    const status = state
    return {status}
  }

export default connect(mapStateToProps)(ContactUs)