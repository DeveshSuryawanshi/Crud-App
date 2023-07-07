import axios from "axios"
import { LOGIN_FALIURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes"

export const login = (userData) => (dispatch) =>{
    dispatch({type : LOGIN_REQUEST})
    return axios.post(`https://reqres.in/api/login`, userData)
      .then((res)=>{
        dispatch({type : LOGIN_SUCCESS, payload : res.data.token})
      })
      .catch((error) =>{
        dispatch({type : LOGIN_FALIURE})
      })
}