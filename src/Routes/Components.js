import Homepage from '../Website/Homepage/Homepage'
import AddProduct from '../Website/AddProduct/Addproduct'
import ContactUs from '../Website/ContactUs/ContactUs'
import SignIn from '../Website/SignIn/SignIn'
import Login from '../Website/Login/LogIn'

import {Provider} from 'react-redux'
import store from '../Data/store'

const homepage = () =>{return <Provider store={store}><Homepage/></Provider>}
const addproduct = () =>{return <Provider store={store}><AddProduct/></Provider>}
const contactus = () =>{return <Provider store={store}><ContactUs/></Provider>}
const signin = () =>{return <Provider store={store}><SignIn/></Provider>}
const login = () =>{return <Provider store={store}><Login/></Provider>}
const notfound = () =>{return(
    <div>Not Found</div>
)}

export{
    homepage,
    notfound,
    addproduct,
    contactus,
    signin,
    login
}