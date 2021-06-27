import * as axios from 'axios';
import { LOAD_TRANSACTIONS } from './types';

export default {
  [LOAD_TRANSACTIONS]: async () => {
    try {
      console.log('transactions admin');
      var response = await axios.get(`${process.env.SERVER_URL}/transactions/admin`);
      console.log( response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },};
