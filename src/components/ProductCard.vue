<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section>
        <img :src="imageSrc" width="268px" class="center" />
        <div class="text-h6">{{ name }}</div>
        <div class="text-subtitle2">${{ price }}</div>
      </q-card-section>
      <q-card-section>
        {{ description }}
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
  props: {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  }
};
</script>
