import axios from 'axios';
import ApiEndpoint from '../config/api-endpoint';
import Utils from '../utils/utils';
import Config from '../config/config';

const Transactions = {
  getAll() {
    return axios.get(ApiEndpoint.GET_ALL_DATA, {
      headers: {
        Authorization: `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`,
      },
    });
  },

  add(data) {
    return axios.post(ApiEndpoint.ADD_DATA, data, {
      headers: {
        Authorization: `Bearer ${Utils.getUserToken(Config.USER_TOKEN_KEY)}`,
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export default Transactions;
