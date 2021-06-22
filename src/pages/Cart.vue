<template>
  <div class="q-pa-md">
    <q-table title="Cart" :data="data" :columns="columns" row-key="name">
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="imageSrc" :props="props">
            <img :src="props.row.imageSrc" width="100px" />
          </q-td>
          <q-td key="name" :props="props">
            <div class="text-h6">
              {{ props.row.name }}
            </div>
          </q-td>
          <q-td key="quantity" :props="props">
            <q-btn
              round
              dense
              color="light-green-7"
              size="xs"
              icon="add"
              @click="handleIncrement(props.row.id)"
            />
            <div class="text-weight-bolder">
              {{ props.row.quantity }}
            </div>
            <q-btn
              round
              dense
              color="light-green-7"
              size="xs"
              icon="remove"
              @click="handleDecrement(props.row.id)"
            />
          </q-td>
          <q-td key="price" :props="props">
            <div class="text-h6">${{ props.row.price }}</div></q-td
          >
          <q-td key="total" :props="props">
            <q-badge color="green" class="text-h6">
              ${{ props.row.quantity * props.row.price }}
            </q-badge>
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
      :disable="this.data.length <= 0"
    />
  </div>
</template>

<script>
import { INCREMENT_PRODUCT, DECREMENT_PRODUCT, BUY_PRODUCTS } from '../store/user/types';

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
    this.data = this.$store.state.user.cart;
  },
  methods: {
    handleBuy() {
      this.$router.push('/payment');
      // this.$store.dispatch(BUY_PRODUCTS, {});
      // this.$router.push('/');
    },
    handleIncrement(id) {
      this.$store.commit(INCREMENT_PRODUCT, id);
    },
    handleDecrement(id) {
      this.$store.commit(DECREMENT_PRODUCT, id);
    }
  }
};
</script>
