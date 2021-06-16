<template>
  <div class="q-pa-md">
    <q-table
      title="Products"
      :data="data"
      :columns="columns"
      row-key="name"
      :selected-rows-label="getSelectedRow"
      selection="multiple"
      :selected.sync="selected"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td>
            <q-checkbox v-model="props.selected" color="primary" />
          </q-td>
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="description" :props="props">
            {{ props.row.description }}
          </q-td>
          <q-td key="imageSrc" :props="props">
            <img :src="props.row.imageSrc" width="268px" class="center" />
          </q-td>
          <q-td key="price" :props="props">
            <q-badge color="green">
              {{ props.row.price }}
            </q-badge>
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <q-btn
      color="light-green-7"
      size="md"
      class="q-mt-md q-mr-md"
      label="Delete"
      :disable="this.selected.length === 0"
      v-on:click="handleDelete"
    />
    <q-btn
      color="light-green-7"
      size="md"
      class="q-mt-md"
      label="Add product"
      v-on:click="handleAdd"
    />
  </div>
</template>

<script>
import { GET_PRODUCTS, DELETE_PRODUCTS } from '../store/product/types';

export default {
  name: 'Products',
  data() {
    return {
      selected: [],
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Name',
          align: 'left',
          sortable: true,
          field: 'name'
        },
        {
          name: 'description',
          align: 'center',
          label: 'Description',
          field: 'description'
        },
        {
          name: 'imageSrc',
          align: 'center',
          label: 'Image',
          field: 'imageSrc'
        },
        {
          name: 'price',
          align: 'center',
          label: 'Price',
          sortable: true,
          field: 'price'
        }
      ],
      data: []
    };
  },
  async mounted() {
    this.data = await this.$store.dispatch(GET_PRODUCTS);
  },
  methods: {
    getSelectedRow() {
      return this.selected.length === 0
        ? ''
        : `${this.selected.length} record${
            this.selected.length > 1 ? 's' : ''
          } selected of ${this.data.length}`;
    },
    async handleDelete() {
      if (this.selected.length > 0) {
        await this.$store.dispatch(DELETE_PRODUCTS, this.selected);
        this.data = await this.$store.dispatch(GET_PRODUCTS);
      }
    },
    async handleAdd() {
      this.$router.push('/product/add');
    }
  }
};
</script>
