import * as axios from 'axios';
import { LOAD_USER, LOGIN, REGISTER, PURCHEASE } from './types';

export default {
  [LOGIN]: async ({ commit }, { username, password }) => {
    try {
      const response = await axios.post(`${process.env.SERVER_URL}/login`, {
        username: username,
        password: password
      });
      console.log('LLEGÓ!', response);
    } catch (err) {
      const { response } = err;
      if (response.status === 401) {

      }
    }
    //commit(response.data);
    //commit('agregarProductos', result);
  }
};
