import { ADD_PERSON } from '../actions/loginAction';

const initState = {
  loginResponse: {}
};

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return Object.assign({}, state, {
        loginResponse: action.payload
      });
    default:
      return state;
  }
};

export default loginReducer;
