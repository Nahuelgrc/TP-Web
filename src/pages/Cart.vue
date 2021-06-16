<template>
  <div class="q-pa-md">
    <q-table title="Cart" :data="data" :columns="columns" row-key="name">
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="imageSrc" :props="props">
            <img :src="props.row.imageSrc" width="100px" />
          </q-td>
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="quantity" :props="props">
            <q-btn round dense color="light-green-7" size="xs" icon="remove" />
            <div class="text-weight-bolder">{{ props.row.quantity }}</div>
            <q-btn round dense color="light-green-7" size="xs" icon="add" />
          </q-td>
          <q-td key="price" :props="props"> ${{ props.row.price }} </q-td>
          <q-td key="total" :props="props">
            <q-badge color="green"> ${{ props.row.quantity * props.row.price }} </q-badge>
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <q-btn
      color="light-green-7"
      size="md"
      class="q-mt-md"
      label="Buy"
      v-on:click="handleBuy"
    />
  </div>
</template>

<script>
import { GET_PRODUCTS, DELETE_PRODUCTS } from '../store/product/types';

export default {
  name: 'Cart',
  data() {
    return {
      columns: [
        {
          name: 'imageSrc',
          align: 'left',
          field: 'imageSrc'
        },
        {
          name: 'name',
          required: true,
          label: 'Name',
          align: 'left',
          sortable: true,
          field: 'name'
        },
        {
          name: 'quantity',
          align: 'center',
          label: 'Quantity',
          field: 'quantity'
        },
        {
          name: 'price',
          align: 'center',
          label: 'Price',
          sortable: true,
          field: 'price'
        },
        {
          name: 'total',
          align: 'right',
          label: 'Total',
          sortable: true,
          field: 'total'
        }
      ],
      data: []
    };
  },
  computed: {},
  async mounted() {
    this.data = this.$store.getters.getProcessedCart;
  },
  methods: {
    async handleDelete() {
      if (this.selected.length > 0) {
        await this.$store.dispatch(DELETE_PRODUCTS, this.selected);
        this.data = await this.$store.dispatch(GET_PRODUCTS);
      }
    },
    async handleBuy() {
      this.$router.push('/cart');
    }
  }
};
</script>
