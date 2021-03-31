import update from 'immutability-helper';
import * as act from './action'

const initialState = {
    users:[],
    currentUser:undefined
}

const Reducer = (state = initialState, action)=>{
    switch(action.type){
        case(act.setUser):
            return update(state,{
                users:{$set: action.username}
            })
        default: return state
    }
}

export default Reducer