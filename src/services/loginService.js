import { login } from './url';
import axios from 'axios';

export const callLoginApi = async p => {
  let payload = {
    name: p.inputOne,
    organization: p.inputTwo,
    designation: p.inputThree
  };
  let res = await axios.post(login, payload);
  return res;
};
