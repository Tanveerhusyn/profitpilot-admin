// actionCreators.js
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, SIGNUP_FAILURE, SIGNUP_SUCCESS } from './actions';
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: { user }
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: { error }
});

export const logout = () => ({
  type: LOGOUT
});

export const signupSuccess = (user) => ({
  type: SIGNUP_SUCCESS,
  payload: { user }
});

export const signupFailure = (error) => ({
  type: SIGNUP_FAILURE,
  payload: { error }
});
