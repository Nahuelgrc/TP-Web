import {
  LOGIN,
  UPDATE_USER_INFO,
  ADD_TO_CART,
  LOGOUT,
  INCREMENT_PRODUCT,
  DECREMENT_PRODUCT,
  BUY_PRODUCTS
} from './types';

export default {
  [LOGIN](state, { id, email, username, firstname, lastname, role }) {
    state.id = id;
    state.email = email;
    state.username = username;
    state.firstname = firstname;
    state.lastname = lastname;
    state.role = role;
    state.isLoggedIn = true;
    state.isAdmin = role === 'admin' ? true : false;
  },
  [UPDATE_USER_INFO](state, data) {},
  [ADD_TO_CART](state, data) {
    const product = state.cart.find(x => x.id === data.id);
    if (!product) {
      state.cart.push({
        ...data,
        quantity: 1
      });
    } else {
      product.quantity++;
    }
  },
  [LOGOUT](state) {
    state.isLoggedIn = false;
    state.isAdmin = false;
    state.username = '';
    state.email = '';
    state.firstname = '';
    state.lastname = '';
    state.role = '';
  },
  [INCREMENT_PRODUCT](state, id) {
    const result = state.cart.find(x => x.id === id);
    result.quantity++;
  },
  [DECREMENT_PRODUCT](state, id) {
    const result = state.cart.find(x => x.id === id);
    if (result.quantity > 0) {
      result.quantity--;
    }

    if (result.quantity === 0) {
      var index = state.cart.findIndex(o => {
        return o.id === id;
      });
      if (index !== -1) state.cart.splice(index, 1);
    }
  },
  [BUY_PRODUCTS](state) {
    state.cart = [];
  }
};
