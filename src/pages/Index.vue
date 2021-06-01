<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <ProductCard
      v-for="product in products"
      :key="product.name"
      v-bind="product"
    />
  </div>
</template>

<script>
import { LOAD_PRODUCTS } from '../store/product/types';
import ProductCard from 'src/components/ProductCard.vue';
import './Pages.scss';

const productData = [
  {
    name: 'Buzo 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    imageSrc: '..\\assets\\products\\Product001.jpg',
    price: 10.0
  }
];

export default {
  name: 'PageIndex',
  components: { ProductCard },
  data() {
    return {
      products: productData
      // products: this.$store.state.product.products || []
    };
  },
  mounted() {
    this.$store.dispatch(LOAD_PRODUCTS);
  }
};
</script>
