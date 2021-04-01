const SetUser = "SetCurrentUsername" //For Sign IN
const AddUserToArray = "AddCurrentUserToArrayOfUser" //For Log IN Later

const setUser = () =>({type:SetUser})
const addUserToArray = () =>({type:AddUserToArray})

export{
    SetUser,
    AddUserToArray,
    setUser,
    addUserToArray
}