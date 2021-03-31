import React, { Component } from "react";
import {Link} from 'react-router-dom'
import './AddProduct.css'

class AddProduct extends Component {
    render(){
        return(
            <React.Fragment>
                <ul className="Navbar">
                    <Link to="/"><li><a href="/#" className="Brand rounded" title="Name Of Website">Website</a></li></Link>
                    <Link to="/"><li><a href="/#" className="NavLink rounded">Home 🏠</a></li></Link>
                    <Link to="/Add-Product"><li><a href="/#" className="NavLink rounded" style={{color:"#cbce91ff"}}>Add Your Product ✔</a></li></Link>
                    <Link to="/Contact-Us"><li><a href="/#" className="NavLink rounded">Contact Us ☎</a></li></Link>
                    <Link to="/Create-Account"><li><a href="/#" className="NavLink rounded">Sign In 🙍‍♂️</a></li></Link>
                </ul>

                <div className="SuggestAccount">
                    <h4>Create Account To Sell Your Own Products</h4>
                    <Link to="/Create-Account"><h5><a href="/#">Create Account</a></h5></Link>
                   <h6>Already Have An Account ?  <Link to="/Log-In"><a href="/#">Click Here</a></Link></h6>
                </div>

                <h3 className="SuccessMessage" id="SuccessMessage">
                    Your Post Added Successfully<br/><br/>
                    Go To HomePage And See Your Product
                </h3>

                <form className="CreatePost">
                    <hr/>

                    <label for="name"> Name Of Your Product :</label>
                    <input type="text" className="form-control" name="name" autoComplete="off" placeholder="👕"/>

                    <label for="price"> Price ($):</label>
                    <input type="number" className="form-control" name="price" autoComplete="off" placeholder="💵"/>

                    <label for="photo" style={{paddingTop:"20px"}}> Choose A Picture :</label><br/>
                    <input type="file" className="InputImage" name="photo" accept="image/*"/><br/>

                    <label for="description">Description :</label><br/>
                    <textarea rows="3" cols="30" className="form-control" placeholder="✏"></textarea>

                    <h5 className="ErrorMessage" id="Message">⚠ Plaese Enter Something </h5>
                    
                    <button type="submit" style={{backgroundColor:"rgb(181, 228, 123)",border:"1px solid rgb(88, 110, 61)"}}>Add</button>
                </form>

                <br/><br/>
            </React.Fragment>
        )
    }
}

export default AddProduct