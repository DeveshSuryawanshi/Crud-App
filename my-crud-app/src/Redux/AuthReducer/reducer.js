import { LOGIN_FALIURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes";

const initialState = {
    isAuth : false,
    isLoading : false,
    isError : false,
    token : ""
}

export const reducer = (state = initialState, {type, payload}) =>{
    switch (type) {
        case LOGIN_REQUEST:
            return {...state, isLoading : true};
          
        case LOGIN_FALIURE:
            return {...state, isLoading : false, isError : true};    

        case LOGIN_SUCCESS:
            return {...state, isLoading : false, isAuth : true, isError : false, token : payload};

        default:
            return state;
    }
}