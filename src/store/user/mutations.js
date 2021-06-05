import { LOAD_USER_INFO, ADD_TO_CART } from './types';

export default {
  [LOAD_USER_INFO](state, data) {
    console.log('state', state);
    console.log('data', data);
  },
  [ADD_TO_CART](state, data) {
    state.cart.push(data);
  }
};
