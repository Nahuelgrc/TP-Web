<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section>
        <img src="..\assets\productImages\Product001.jpg" width="250px" class="center" />
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">$20.84</div>
      </q-card-section>
      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat
      </q-card-section>
      <q-separator></q-separator>

      <q-card-actions vertical>
        <q-btn rounded color="light-green">Add to cart</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import './components.scss';

export default {
  name: 'ProductCard',
};

</script>
