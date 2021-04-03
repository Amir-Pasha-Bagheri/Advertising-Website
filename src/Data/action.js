const SetUser = "SetCurrentUsername" //For Sign IN
const AddUserToArray = "AddCurrentUserToArrayOfUser" //For Log IN Later
const SetUserUndefind = "SetCurrentUserToUndefind" //For Log Out
const ChangePassword = "ChangePassword"

const setUser = () =>({type:SetUser})
const addUserToArray = () =>({type:AddUserToArray})
const setUserUndefind = () => ({type:SetUserUndefind})
const changePassword = () =>({type:ChangePassword})

export{
    SetUser,
    AddUserToArray,
    SetUserUndefind,
    ChangePassword,
    setUser,
    addUserToArray,
    setUserUndefind,
    changePassword
}