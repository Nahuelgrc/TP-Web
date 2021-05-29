import { LOAD_USER_INFO } from './types';

export default {
  [LOAD_USER_INFO]: (state, data) => {
    console.log('state', state);
    console.log('data', data);
    //state.cart.push(data);
  }
};
