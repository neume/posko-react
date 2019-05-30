import { SIGN_IN, SIGN_OUT } from './types';

export const signInAction = () => dispatch => {
  dispatch({
    type: SIGN_IN,
    payload: {}
  })
}


export const signOutAction = () => dispatch => {
  dispatch({
    type: SIGN_OUT,
    payload: {}
  })
}
