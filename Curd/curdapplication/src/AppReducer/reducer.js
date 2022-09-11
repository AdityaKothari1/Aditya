


import React from 'react'
import { EDIT_BOOK_FAILURE, EDIT_BOOK_REQUEST, EDIT_BOOK_SUCESS, GET_BOOK_FAILURE, GET_BOOK_REQUEST, GET_BOOK_SUCESS } from './actiontypes'

const inistate={
    books:[],
    editbook:[],
    isLoading:false,
    isError:false
}
function AppReducer(state=inistate,action) {
    const {type,payload}=action
    switch(type){
        case GET_BOOK_REQUEST :
            return {...state,isLoading:true}
             
         case GET_BOOK_SUCESS:
            return {...state,books:payload,isLoading:false,isError:false}

         case GET_BOOK_FAILURE:
            return {...state,isError:true}   

            case EDIT_BOOK_REQUEST :
                return {...state,isLoading:true}
                 
             case EDIT_BOOK_SUCESS:
                return {...state,editbook:payload,isLoading:false,isError:false}
    
             case EDIT_BOOK_FAILURE:
                return {...state,isError:true}      

            default:
                return state
    }
}

export default AppReducer