import sendRequest from '../utilities/send-request';

const BASE_URL = '/api/users';

export const signup = userData => {
  return sendRequest(BASE_URL, 'POST', userData);
}

export const login = credentials => {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export const checkToken = () => {
  return sendRequest(`${BASE_URL}/check-token`);
}
