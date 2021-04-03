import React, { Component } from "react";
import {Link} from 'react-router-dom'
import './Account.css'
import { connect } from 'react-redux'
import history from "../../history";
import * as act from '../../Data/action'

class Account extends Component{
    render(){
        let password
        if(this.props.status.currentUser===undefined){
            history.push('/')
        }
        else {
            // Find Password Of Current User
            const FindPass = this.props.status.users.find(e=> e.username===this.props.status.currentUser)
            password = FindPass.password
        }
        const SignInClick = () =>{
            this.props.status.currentUser===undefined? history.push('/Create-Account'): history.push('/Account')
        }

        //Password Validation
        const enterPassword1 = (event) =>{
            let password = document.getElementById('password1').value
            const allowed = /[A-Za-z0-9_]/g
            let sub = password.substring(0, password.length - 1)
            if(!allowed.test(event.key)){
                document.getElementById('password1').value = sub
            }
            // Declaring the Message
            const lower = document.getElementById('lowercase')
            const upper = document.getElementById('uppercase')
            const number = document.getElementById('number')
            const chars = document.getElementById('chars')
            const length = document.getElementById('password1').value.length
            //lowercase checked
            if(password.match(/[a-z]/)){
                lower.classList.remove('invalid')
                lower.classList.add('valid')
            }
            else{
                lower.classList.remove('valid')
                lower.classList.add('invalid')
            }
            //upper case checked
            if(password.match(/[A-Z]/)){
                upper.classList.remove('invalid')
                upper.classList.add('valid')
            }
            else{
                upper.classList.remove('valid')
                upper.classList.add('invalid')
            }
            //number checked
            if(password.match(/[0-9]/)){
                number.classList.remove('invalid')
                number.classList.add('valid')
            }
            else{
                number.classList.remove('valid')
                number.classList.add('invalid')
            }
            //password length checked
            if(length >= 6){
                chars.classList.remove('invalid')
                chars.classList.add('valid')
            }
            else{
                chars.classList.remove('valid')
                chars.classList.add('invalid')
            }
        }

        const enterPassword2 = (event) =>{
            let password = document.getElementById('password2').value
            const allowed = /[A-Za-z0-9_]/g
            let sub = password.substring(0, password.length - 1)
            if(!allowed.test(event.key)){
                document.getElementById('password2').value = sub
            }
        }
        //Password Show
        function checkbox1(){
            const x = document.getElementById('password1')
            if(x.type === 'password') {
                x.type = 'text'
                x.setAttribute('autoComplete','off')
            }
            else {
                x.type = 'password1'
            }
        }
        function checkbox2(){
            const y = document.getElementById('password2')
            if(y.type === 'password') {
                y.type = 'text'
                y.setAttribute('autoComplete','off')
            }
            else {
                y.type = 'password2'
            }
        }
        //Change Password Display Form
        const ChangePass = () => document.getElementById("ChanePassContainer").style.display==="block"? document.getElementById("ChanePassContainer").style.display="none":document.getElementById("ChanePassContainer").style.display = "block"
        
        
        //Check New Password
        const checkNewPass = (e) =>{
            e.preventDefault()
            const validAmount = document.querySelectorAll(".valid")
            const pass1 = document.getElementById('password1').value
            const pass2 = document.getElementById('password2').value
            const messageDanger = document.getElementById('DangerMessage')
            const messageSuccess = document.getElementById('SuccessMessage')
            if(validAmount.length!==4){
                messageDanger.innerHTML = ' At Least One Lowercase, One Uppercase And One Number !'
                messageDanger.style.display = "block"
                messageSuccess.style.display = "none"
            }
            else{
                if(pass1.length<6){
                    messageDanger.innerHTML = 'Your Password Is Too Short !'
                    messageDanger.style.display = "block"
                    messageSuccess.style.display = "none"
                }
                else{
                    if(pass1!==pass2){
                        messageDanger.innerHTML = 'Your Passwords Are Not Match !'
                        messageDanger.style.display = "block"
                        messageSuccess.style.display = "none" 
                    }
                    else {
                        if(pass1===password){
                            messageDanger.innerHTML = 'Your New Password Cannot Be Your Current Password !'
                            messageDanger.style.display = "block"
                            messageSuccess.style.display = "none"
                        }
                        else{
                            const index = this.props.status.users.findIndex(user=>user.username===this.props.status.currentUser)
                            this.props.dispatch({type:act.ChangePassword,newpassword: pass1,index: index})
                            messageDanger.style.display = "none"
                            messageSuccess.style.display = "block"
                        }
                    }
                } 
            }
        }

        //Log Out Dispatch
        const LogOut = () =>{
            this.props.dispatch({type:act.SetUserUndefind})
        }

        return(
            <React.Fragment>
                <ul className="Navbar">
                    <Link to="/"><li><a href="/#" className="Brand rounded" title="Name Of Website">Website</a></li></Link>
                    <Link to="/"><li><a href="/#" className="NavLink rounded">Home 🏠</a></li></Link>
                    <Link to="/Add-Product"><li><a href="/#" className="NavLink rounded">Add Your Product ✔</a></li></Link>
                    <Link to="/Contact-Us"><li><a href="/#" className="NavLink rounded">Contact Us ☎</a></li></Link>
                    <li className="NavLink rounded" style={{color:"#cbce91ff"}} onClick={SignInClick}>{this.props.status.currentUser===undefined? 'Sign In 🙍‍♂️': this.props.status.currentUser}</li>
                </ul>

                <h3 className="SuccessMessage" id="SuccessMessage" style={{display:"none"}}>
                    Password Updated !!!
                </h3>

                <h3 className="DangerMessage bg-danger" id="DangerMessage" style={{display:"none"}}>
                </h3>

                <div className="Container">
                    <hr/>

                    <p>Username : <span className="UsePass">{this.props.status.currentUser}</span><br/></p>
                    <p>password : <span className="UsePass" id="CurrentPassContainer">{password}</span></p><br/>
                    <button className="ChangePass" onClick={ChangePass}>Change Password</button><br/><br/>
                    
                    <form className="ChanePassContainer" id="ChanePassContainer">
                        <div className="input-group mb-3">
                            <input type="password" id="password1" onKeyUp={enterPassword1} className="form-control" pattern="(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{6,}" name="password" placeholder="At least one Lowercase, Uppercase and number And 6 Characters" title="Your Password Must Contain at least 6 Characters one Lowercase, one Uppercase and Number." required/>
                            <div className="input-group-append input-group-text">
                                👁 <input type="checkbox" id="checkbox1" onClick={checkbox1}/>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" id="password2" onKeyUp={enterPassword2} className="form-control" pattern="(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{6,}" name="password" placeholder="Repeat Your Password" title="Your Password Must Contain at least 6 Characters one Lowercase, one Uppercase and Number." required/>
                            <div className="input-group-append input-group-text">
                                👁 <input type="checkbox" id="checkbox2" onClick={checkbox2}/>
                            </div>
                        </div>
        
                        <div id='validStatus' className="validStatus" style={{display:'none'}}>
                            <p id="lowercase" className="invalid">At least One Lowercase.</p>
                            <p id="uppercase" className="invalid">At least One Uppercase.</p>
                            <p id="number" className="invalid">At least One Number.</p>
                            <p id="chars" className="invalid">At least 6 Characters Or More.</p><br/>
                        </div>

                        <button className="ChangePass" type="submit" onClick={checkNewPass}>Done</button><br/><br/>
                    </form>

                    <button className="LogOut" onClick={LogOut}>Log Out</button><br/><br/>
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

export default connect(mapStateToProps)(Account)