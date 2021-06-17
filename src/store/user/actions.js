import * as axios from 'axios';
import {
  LOAD_USERS,
  LOGIN,
  SIGNUP,
  LOGOUT,
  DELETE_USERS,
  ADD_TO_CART,
  UPDATE_USER_INFO,
  BUY_PRODUCTS
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
  },
  [LOAD_USERS]: async () => {
    try {
      var response = await axios.get(`${process.env.SERVER_URL}/users`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  [DELETE_USERS]: async ({ commit }, users) => {
    try {
      const data = {
        ids: users.map(a => a.id)
      };
      await axios.delete(`${process.env.SERVER_URL}/users`, { data });
    } catch (err) {
      console.log(err);
    }
  },
  [BUY_PRODUCTS]: async ({ commit, state }) => {
    try {
      const data = {
        user_id: state.id,
        cart: state.cart
      };
      const response = await axios.post(
        `${process.env.SERVER_URL}/transaction`,
        data
      );
      commit(BUY_PRODUCTS, response.data);
    } catch (err) {
      console.log(err);
    }
  }
};
