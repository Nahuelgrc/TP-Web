<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
  </div>
</template>

<script>
import ProductCard from 'src/components/ProductCard.vue';
import './Pages.scss';

export default {
  name: 'PageIndex',
  components: { ProductCard }
};
</script>
