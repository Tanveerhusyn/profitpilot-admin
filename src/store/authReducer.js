// authReducer.js
import * as actionTypes from './actions';

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        error: null
      };
    case actionTypes.LOGIN_FAILURE:
    case actionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.payload.error
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user
      };
    default:
      return state;
  }
};

export default authReducer;
