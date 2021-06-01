import { LOAD_PRODUCTS } from './types';

export default {
  [LOAD_PRODUCTS](state, data) {
    state.products = data
  }
};
