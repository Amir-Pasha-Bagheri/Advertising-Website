import {Route , Switch} from 'react-router-dom'
import * as page from './Components'

const Routes = () =>{
    return(
        <div>
            <Switch>
                <Route exact path="/" component={page.homepage}/>
                <Route path="Add-Product" component={page.addproduct}/>
                <Route path="Contact-Us" component={page.contactus}/>
                <Route path="Create-Account" component={page.signin}/>
                <Route component={page.notfound}/>
            </Switch>
        </div>
    )
}

export default Routes