import Config from './config';

const ApiEndpoint = {
  REGISTER: `${Config.BASE_URL}/register`,
  LOGIN: `${Config.BASE_URL}/login`,

  GET_ALL_DATA: `${Config.BASE_URL}/stories`,
  ADD_DATA: `${Config.BASE_URL}/stories`,
};

export default ApiEndpoint;
