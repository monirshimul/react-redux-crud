import { callLoginApi } from '../services/loginService';

export const ADD_PERSON = 'ADD_PERSON';

export const loginSuccess = d => {
  return {
    type: ADD_PERSON,
    payload: d
  };
};

export const loginRequest = payload => {
  return async dispatch => {
    try {
      let res = await callLoginApi(payload);
      dispatch(loginSuccess(res.data));
    } catch (ex) {
      dispatch(loginSuccess(ex));
    }
  };
};
