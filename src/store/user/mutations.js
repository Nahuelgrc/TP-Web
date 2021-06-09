import { LOGIN, UPDATE_USER_INFO , ADD_TO_CART, LOGOUT } from './types';

export default {
  [LOGIN](state, { email, username, firstname, lastname, role }) {
    state.email = email;
    state.username = username;
    state.firstname = firstname;
    state.lastname = lastname;
    state.role = role;
    state.isLoggedIn = true;
    state.isAdmin = role === 'admin' ? true : false;
  },
  [UPDATE_USER_INFO](state, data) {
    console.log('state', state);
    console.log('data', data);
  },
  [ADD_TO_CART](state, data) {
    state.cart.push(data);
  },
  [LOGOUT](state) {
    state.isLoggedIn = false;
    state.isAdmin = false;
    state.username = '';
    state.email = '';
    state.firstname = '';
    state.lastname = '';
    state.role = '';
  }
};
