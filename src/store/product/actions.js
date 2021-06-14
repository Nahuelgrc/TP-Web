import * as axios from 'axios';
import {
  LOAD_PRODUCTS,
  GET_PRODUCTS,
  DELETE_PRODUCTS,
  ADD_PRODUCT
} from './types';

export default {
  [LOAD_PRODUCTS]: async ({ commit }) => {
    try {
      const response = await axios.get(`${process.env.SERVER_URL}/products`);
      commit(LOAD_PRODUCTS, response.data);
    } catch (err) {
      console.log(err);
    }
  },
  [GET_PRODUCTS]: async () => {
    try {
      const response = await axios.get(`${process.env.SERVER_URL}/products`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  [DELETE_PRODUCTS]: async ({ commit }, products) => {
    try {
      const data = {
        ids: products.map(a => a.id)
      };
      await axios.delete(`${process.env.SERVER_URL}/products`, { data });
    } catch (err) {
      console.log(err);
    }
  },
  [ADD_PRODUCT]: async ({ commit }, product) => {
    try {
      await axios.post(`${process.env.SERVER_URL}/product`, product);
    } catch (err) {
      console.log(err);
    }
  }
};
