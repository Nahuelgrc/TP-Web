<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <ProductCard
      v-for="product in this.$store.state.product.products || []"
      :key="product.name"
      v-bind="product"
    />
  </div>
</template>

<script>
import { LOAD_PRODUCTS } from '../store/product/types';
import ProductCard from 'src/components/ProductCard.vue';
import './Pages.scss';

export default {
  name: 'PageIndex',
  components: { ProductCard },
  mounted() {
    this.$store.dispatch(LOAD_PRODUCTS);
  }
};
</script>
