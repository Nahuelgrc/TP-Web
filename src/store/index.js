import Vuex from 'vuex';
import Vue from 'vue';

import user from './user';
import product from './product';
import transaction from './transaction';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    product,
    transaction
  }
});
