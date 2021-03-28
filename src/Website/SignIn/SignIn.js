import React, {Component} from 'react'
import './SignIn.css'

class SignIn extends Component{
    render(){
        return(
            <React.Fragment>
                <ul className="Navbar">
                    <li><a href="/#" className="Brand rounded" title="Name Of Website">Website</a></li>
                    <li><a href="/#" className="NavLink rounded">Home 🏠</a></li>
                    <li><a href="/#" className="NavLink rounded">Add Your Product ✔</a></li>
                    <li><a href="/#" className="NavLink rounded">Contact Us ☎</a></li>
                    <li><a href="/#" className="NavLink rounded" style={{color:"#cbce91ff"}}>Sign In 🙍‍♂️</a></li>
                </ul>
                <form className="SignInForm">
                    <hr/>

                    <label for="name">Username :</label>
                    <input type="text" id="username" className="form-control" pattern=".{8,}" name="username" title="Your Username Must Contain 8 Characters." placeholder="Your Userame Must Contain 8 Characters" required/>
                    
                    <label for="name">Password :</label>
                        <div class="input-group mb-3">
                            <input type="password" className="form-control" pattern="(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{6,}" name="password" placeholder="At least one Lowercase, Uppercase and number" title="Your Password Must Contain at least 8 Characters one Lowercase, one Uppercase and Number." required/>
                            <div class="input-group-append input-group-text">
                                👁 <input type="checkbox" id="checkbox"/>
                            </div>
                        </div>

                    <div id='validStatus' className="validStatus">
                        <p id="lowercase" className="invalid">At least One Lowercase.</p>
                        <p id="uppercase" className="invalid">At least One Uppercase.</p>
                        <p id="number" className="invalid">At least One Number.</p>
                        <p id="chars" className="invalid">At least 6 Characters Or More.</p><br/>
                    </div>
                    
                </form>
            </React.Fragment>
        )
    }
}

export default SignIn