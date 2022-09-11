import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCESS } from "./actionstypes"



const inistate={
    isAuth:false,
     token:"",
     isLoading:false,
     isError:true
}

 function AuthReducer(state=inistate,action){
    const {type,payload}=action
    switch(type){
        case LOGIN_REQUEST:
            return {...state,isLoading:true}
        case LOGIN_SUCESS:
            return{
                ...state,token:payload,
                isLoading:false,
                isError:false,
                isAuth:true
            }
          case LOGIN_FAILURE:
             return {...state,isError:true}
        default:
            return state
    }
}
export {AuthReducer}