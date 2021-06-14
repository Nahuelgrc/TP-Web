<template>
  <q-page class="row justify-center items-center">
    <div class="column">
      <q-card square bordered class="q-pa-lg shadow-1">
        <q-card-section>
          <q-form class="q-gutter-md">
            <q-input
              square
              filled
              clearable
              v-model="name"
              type="text"
              label="Product name"
            />
            <q-input
              square
              filled
              clearable
              v-model="description"
              type="textarea"
              label="Description"
            />
            <q-input
              @input="
                val => {
                  imageSrc = val[0];
                }
              "
              filled
              type="file"
              hint="Select image"
            ></q-input>
            <q-input
              square
              filled
              clearable
              v-model="price"
              type="number"
              label="Price"
            />
          </q-form>
        </q-card-section>
        <q-card-actions class="q-px-md">
          <q-btn
            unelevated
            color="light-green-7"
            size="lg"
            class="full-width"
            label="Add product"
            v-on:click="handleAdd"
          />
        </q-card-actions>
      </q-card>
    </div>
    <q-item-label />
  </q-page>
</template>

<script>
import { ADD_PRODUCT } from '../store/product/types';
import './Pages.scss';

export default {
  name: 'AddProduct',
  data: () => {
    return {
      name: '',
      description: '',
      imageSrc: '',
      price: ''
    };
  },
  methods: {
    handleAdd() {
      const payload = {
        name: this.name,
        description: this.description,
        imageSrc: 'products/' + this.imageSrc.name,
        price: this.price
      };
      this.$store.dispatch(ADD_PRODUCT, payload);
      this.$router.push('/products');
    }
  }
};
</script>
