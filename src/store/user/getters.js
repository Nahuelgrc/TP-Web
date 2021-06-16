import * as _ from 'lodash';

export default {
  // getProcessedCart: state => {
  //   const cart = state.cart;

  //   const result = cart.reduce((acc, curr) => {
  //     const item = acc.find(x => x.id === curr.id);

  //     if (item) {
  //       item.quantity++;
  //     } else {
  //       curr.quantity = 1;
  //       acc.push(curr);
  //     }

  //     return acc;
  //   }, []);
  //   return result;
  // },
  getTotalCartItems: state => {
    const totalQuantity = state.cart.reduce(function(sum, product) {
      return sum + product.quantity;
    }, 0);

    return totalQuantity;
  }
};
