import React, {Component} from 'react'
import './ContactUs.css'
import telegram from './Image/telegram.png'
import whatsapp from './Image/whatsapp.jpg'
import gmail from './Image/gmail.png'

class ContactUs extends Component {
    render(){
        return(
            <React.Fragment>
                <ul className="Navbar">
                    <li><a href="/#" className="Brand rounded" title="Name Of Website">Website</a></li>
                    <li><a href="/#" className="NavLink rounded">Home 🏠</a></li>
                    <li><a href="/#" className="NavLink rounded">Add Your Product ✔</a></li>
                    <li><a href="/#" className="NavLink rounded" style={{color:"#cbce91ff"}}>Contact Us ☎</a></li>
                    <li><a href="/#" className="NavLink rounded">Sign In 🙍‍♂️</a></li>
                </ul>
                <div className="Container">
                    <h5>Contact US</h5><hr/><br/>
                    Thank You For Checking Our Website.<br/>
                    I Hope You Like It.<br/><br/><br/>
                    Here Are Few Way Which You can Contact Us :<br/><br/>
                    <img src={telegram} alt="Telegram" width="20px" height="20px"/> +98 937 345 2374<br/><br/>
                    <img src={whatsapp} alt="Whatsapp" width="19px" height="19px"/> +98 937 345 2374<br/><br/>
                    You can text me in Whatsapp or Telegram.<br/>
                    Or send me e-mail.<br/><br/>
                    <img src={gmail} alt="gmail" className="Gmail"/> a.p.bagheri83@gmail.com<br/><br/>
                    24 Hours available :)
                </div>
                <br/><br/>
            </React.Fragment>
        )
    }
}

export default ContactUs