import axios from 'axios';
import ApiEndpoint from '../config/api-endpoint';

const Auth = {
  register({ name, email, password }) {
    return axios.post(ApiEndpoint.REGISTER, { name, email, password });
  },

  login({ email, password }) {
    return axios.post(ApiEndpoint.LOGIN, { email, password });
  },
};
export default Auth;
