import React, { Component } from "react";
import './AddProduct.css'

class AddProduct extends Component {
    render(){
        return(
            <React.Fragment>
                <ul className="Navbar">
                    <li><a href="/#" className="Brand rounded" title="Name Of Website">Website</a></li>
                    <li><a href="/#" className="NavLink rounded">Home 🏠</a></li>
                    <li><a href="/#" className="NavLink rounded" style={{color:"#cbce91ff"}}>Add Your Product ✔</a></li>
                    <li><a href="/#" className="NavLink rounded">Contact Us ☎</a></li>
                    <li><a href="/#" className="NavLink rounded">Sign In 🙍‍♂️</a></li>
                </ul>
                <div className="SuggestAccount">
                    <h4>Create Account To Sell Your Own Products</h4>
                    <h5><a href="/#">Create Account</a></h5>
                    <h6>Already Have An Account ? <a href="/#">Click Here</a></h6>
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