import * as _ from 'lodash';

export default {
  getProcessedCart: state => {
    const cart = state.cart;

    console.log('cart', cart);

    const result = cart.reduce((acc, curr) => {
      const item = acc.find(x => x.id === curr.id);

      if (item) {
        item.quantity++;
      } else {
        curr.quantity = 1;
        acc.push(curr);
      }

      return acc;
    }, []);

    console.log(result);

    return result;
  }
};
