import Homepage from '../Website/Homepage/Homepage'
import AddProduct from '../Website/AddProduct/Addproduct'
import ContactUs from '../Website/ContactUs/ContactUs'
import SignIn from '../Website/SignIn/SignIn'

const homepage = () =>{return <Homepage/>}
const addproduct = () =>{return <AddProduct/>}
const contactus = () =>{return <ContactUs/>}
const signin = () =>{return <SignIn/>}
const notfound = () =>{return(
    <div>Not Found</div>
)}

export{
    homepage,
    notfound,
    addproduct,
    contactus,
    signin
}