import * as axios from 'axios';
import { LOAD_PRODUCTS } from './types';

export default {
  [LOAD_PRODUCTS]: async ({ commit }) => {
    try {
      const response = await axios.get(`${process.env.SERVER_URL}/products`);
      commit(LOAD_PRODUCTS, response.data);
    } catch (err) {
      console.log(err);

    }
  }
};
