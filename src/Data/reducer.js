import update from 'immutability-helper';
import * as act from './action'

const initialState = {
    posts:[],
    users:[],
    currentUser:undefined
}

const Reducer = (state = initialState, action)=>{
    switch(action.type){ 

        case(act.SetUser): // Set Current User
            return update(state,{
                currentUser:{$set: action.username}
            })

        case(act.AddUserToArray): //Push New User To Users Array
            const PushNewAcoount = {username: action.username, password: action.password}
            return {
                ...state,
                users:[...state.users, PushNewAcoount]
            }

        case(act.SetUserUndefind): //Remove Current User For Log Out
            return update(state,{
                currentUser:{$set:undefined}
            })

        case(act.ChangePassword):
            return update(state,{
                users:{
                    [action.index]:{
                        password:{$set:action.newpassword}
                    }
                }
            })

        case(act.CreatePost): //Create New Post
            const Post = {
                name: action.name,
                price : action.price,
                img : action.img,
                description : action.description,
                date : action.date
            }
            return {
                ...state,
                posts:[Post , ...state.posts]
            }

        default: return state
    }
}

export default Reducer