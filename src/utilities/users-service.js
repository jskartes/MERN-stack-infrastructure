import * as usersAPI from './users-api';

export const getToken = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;
  const payload = JSON.parse(atob(token.split('.')[1]));
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem('token');
    return null;
  }
  return token;
}

export const getUser = () => {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export const signup = async userData => {
  const token = await usersAPI.signup(userData);
  localStorage.setItem('token', token);
  return getUser();
}

export const logout = () => {
  localStorage.removeItem('token');
}

export const login = async credentials => {
  const token = await usersAPI.login(credentials);
  localStorage.setItem('token', token);
  return getUser();
}

export const checkToken = () => {
  return usersAPI.checkToken().then(dateString => new Date(dateString));
}
