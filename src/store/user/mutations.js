import { LOGIN, LOAD_USER_INFO, ADD_TO_CART } from './types';

export default {
  [LOGIN](state, { email, username, firstname, lastname, role }) {
    state.email = email;
    state.username = username;
    state.firstname = firstname;
    state.lastname = lastname;
    state.role = role;
    state.isLoggedIn= true;
    state.isAdmin = role === 'admin' ? true : false;
  },
  [LOAD_USER_INFO](state, data) {
    console.log('state', state);
    console.log('data', data);
  },
  [ADD_TO_CART](state, data) {
    state.cart.push(data);
  }
};
