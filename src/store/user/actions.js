import * as axios from 'axios';
import { LOAD_USER, LOGIN, SIGNUP, PURCHEASE } from './types';

export default {
  [LOGIN]: async ({ commit }, { username, password }) => {
    try {
      const response = await axios.post(`${process.env.SERVER_URL}/login`, {
        username: username,
        password: password
      });
    } catch (err) {
      const { response } = err;
      if (response.status === 401) {
      }
    }
    //commit(response.data);
    //commit('agregarProductos', result);
  },
  [SIGNUP]: async (
    { commit },
    { username, password, email, firstname, lastname }
  ) => {
    try {
      console.log('llegó');
    } catch (err) {}
  }
};
