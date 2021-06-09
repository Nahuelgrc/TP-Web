import * as axios from 'axios';
import {
  LOAD_USER,
  LOGIN,
  SIGNUP,
  LOGOUT,
  PURCHEASE,
  ADD_TO_CART
} from './types';

export default {
  [LOGIN]: async ({ commit }, { username, password }) => {
    try {
      const response = await axios.post(`${process.env.SERVER_URL}/login`, {
        username: username,
        password: password
      });
      commit(LOGIN, response.data);
    } catch (err) {
      const { response } = err;
      if (response.status === 401) {
      }
    }
  },
  [SIGNUP]: async (
    { commit },
    { username, password, email, firstname, lastname }
  ) => {
    try {
      console.log('llegó');
    } catch (err) {}
  },
  [LOGOUT]: async ({ commit }) => {
    commit(LOGOUT);
  },
  [ADD_TO_CART]: async ({ commit }, data) => {
    commit(ADD_TO_CART, data);
  }
};
