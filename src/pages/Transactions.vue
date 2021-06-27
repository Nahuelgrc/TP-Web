<template>
  <div id="q-app">
    <div class="q-pa-md">
      <q-table
        title="Transactions"
        :data="data"
        :columns="columns"
      >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="product_imageSrc" :props="props">
            <img :src="props.row.product_imageSrc" width="268px" class="center" />
          </q-td>
          <q-td key="product_name" :props="props">
            {{ props.row.product_name }}
          </q-td> 
          <q-td key="user_username" :props="props">
            {{ props.row.user_username }}
          </q-td> 
          <q-td key="quantity" :props="props">
            {{ props.row.quantity }}
          </q-td> 
          <q-td key="total" :props="props">
            {{ "$" + props.row.total }}
          </q-td> 
          <q-td key="creation_date" :props="props">
            {{ props.row.creation_date }}
          </q-td> 
        </q-tr>
      </template>
      </q-table>
    </div>
  </div>
</template>

<script>
import { LOAD_TRANSACTIONS } from '../store/transaction/types';

export default {
  data() {
    return {
      selected: [],
      columns: [
        {
          name: 'product_imageSrc',
          align: 'center',
          label: 'Image',
          field: 'product_imageSrc'
        },
        {
          name: 'product_name',
          required: true,
          label: 'Product',
          align: 'left',
          sortable: true,
          field: 'product_name'
        },
        {
          name: 'user_username',
          required: true,
          label: 'Username',
          align: 'left',
          sortable: true,
          field: 'user_username'
        },
        {
          name: 'quantity',
          required: true,
          label: 'Quantity',
          align: 'left',
          sortable: true,
          field: 'quantity'
        },
        {
          name: 'total',
          required: true,
          label: 'Total',
          align: 'left',
          sortable: true,
          field: 'total'
        },
        {
          name: 'creation_date',
          required: true,
          label: 'Date',
          align: 'left',
          sortable: true,
          field: 'creation_date'
        },
      ],
      data: []
    };
  },
  async mounted() {
    this.data = await this.$store.dispatch(LOAD_TRANSACTIONS);
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
        await this.$store.dispatch(DELETE_USERS, this.selected);
        this.data = await this.$store.dispatch(LOAD_USERS);
      }
    }
  }
};
</script>