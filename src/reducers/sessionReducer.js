import { SIGN_IN, SIGN_OUT } from '../actions/types';

const initialState = {
  authenticated: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        authenticated: true
      };
    case SIGN_OUT:
      return {
        ...state,
        item: false
      };
    default:
    return state;
  }
}
