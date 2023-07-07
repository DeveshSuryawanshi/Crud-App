import {
    GET_PRODUCT_SUCCESS,
  POST_PRODUCT_SUCCESS,
  PRODUCT_FALIURE,
  PRODUCT_REQUEST,
} from "../actionTypes";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  error: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_REQUEST:
      return { ...state, isLoading: true };

    case PRODUCT_FALIURE:
      return { ...state, isError: true, isLoading: false, error: payload };

    case POST_PRODUCT_SUCCESS:
      return { ...state, isLoading: false };

    case GET_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, products: payload };

    default:
      return state;
  }
};
