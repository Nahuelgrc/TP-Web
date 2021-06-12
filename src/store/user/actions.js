import * as axios from 'axios';
import {
  LOAD_USER,
  LOGIN,
  SIGNUP,
  LOGOUT,
  PURCHEASE,
  ADD_TO_CART,
  UPDATE_USER_INFO
} from './types';

export default {
  [LOGIN]: async ({ commit }, { username, password }) => {
    try {
      const response = await axios.post(`${process.env.SERVER_URL}/login`, {
        username,
        password
      });
      commit(LOGIN, response.data);
    } catch (err) {
      const { response } = err;
      if (response.status === 401) {
      }
    }
  },
  [SIGNUP]: async ({ commit }, data) => {
    try {
      await axios.post(`${process.env.SERVER_URL}/user`, data);
      data.role = 'user';
      commit(LOGIN, data);
    } catch (err) {
      console.log(err);
    }
  },
  [LOGOUT]: async ({ commit }) => {
    commit(LOGOUT);
  },
  [ADD_TO_CART]: async ({ commit }, data) => {
    commit(ADD_TO_CART, data);
  },
  [UPDATE_USER_INFO]: async ({ commit }, data) => {
    try {
      await axios.put(`${process.env.SERVER_URL}/user`, data);
      commit(UPDATE_USER_INFO, data);
    } catch (err) {
      console.log(err);
    }
  }
};
