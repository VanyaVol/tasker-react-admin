import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK, AUTH_GET_PERMISSIONS } from 'react-admin';
import axios from 'axios';
import decodeJwt from 'jwt-decode';

export default (type, params) => {

  if (type === AUTH_LOGIN) {
    const { username, password } = params;
    let data = JSON.stringify({'user_name':username, 'password': password });

    return axios.post('https:/tasker.kirychuk.pp.ua/api/v1/auth/login', data, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => {
      if (res.data.error || res.status !== 200) {
        throw new Error(res.data.error);
      }
      else {
        const token = res.data.data.token;
        const decodedToken = decodeJwt(token);
        // const role = decodedToken.identity.role;
        const role = 'admin';
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
        return Promise.resolve();
      }
    });
  }

  if (type === AUTH_LOGOUT) {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    return Promise.resolve();
  }

  if (type === AUTH_ERROR) {
    const { status } = params;
    if (status === 401 || status === 403) {
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      return Promise.reject();
    }
    return Promise.resolve();
  }

  if (type === AUTH_CHECK) {
    return localStorage.getItem('token') ? Promise.resolve() : Promise.reject({ redirectTo: '/login' });
  }

  if (type === AUTH_GET_PERMISSIONS) {
    const role = localStorage.getItem('role');
    return role ? Promise.resolve(role) : Promise.reject();
  }

};