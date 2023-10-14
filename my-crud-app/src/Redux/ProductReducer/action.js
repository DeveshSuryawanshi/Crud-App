import axios from "axios"
import { GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FALIURE, PRODUCT_REQUEST } from "../actionTypes"


export const postProduct = (newProduct) => (dispatch) =>{
    dispatch({type : PRODUCT_REQUEST})
    axios.post(`https://react-crud-app-json-server-ojtv.onrender.com/products`, newProduct)
     .then((res) => {
        dispatch({type : POST_PRODUCT_SUCCESS})
     })
     .catch((error) => {
        dispatch({type : PRODUCT_FALIURE, payload : error.massage})
     })
}

export const getProduct = (paramsObj) =>(dispatch)=>{
   dispatch({type : PRODUCT_REQUEST})
   axios.get(`https://react-crud-app-json-server-ojtv.onrender.com/products`,paramsObj)
   .then((res)=> {
      dispatch({type : GET_PRODUCT_SUCCESS, payload: res.data})
   })
   .catch((error)=>{
      dispatch({type : PRODUCT_FALIURE})
   })
}

export const updateProduct = (newData,id) => (dispatch)=>{
   dispatch({type : PRODUCT_REQUEST})

   axios.patch(`https://react-crud-app-json-server-ojtv.onrender.com/products/${id}`, newData)
     .then((res)=>{
      dispatch({type : PATCH_PRODUCT_SUCCESS})
     })
     .catch((error)=>{
      dispatch({type : PRODUCT_FALIURE})
     })
}