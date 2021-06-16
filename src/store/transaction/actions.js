import * as axios from 'axios';
import {
  CREATE_TRANSACTION
} from './types';

export default {
  [CREATE_TRANSACTION]: async ({ commit }, data) => {
    try {
      //const response = await axios.post();
      commit(CREATE_TRANSACTION, response.data);
    } catch (err) {
      console.log(err);
    }
  },
};
