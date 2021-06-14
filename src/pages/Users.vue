<template>
  <div id="q-app">
    <div class="q-pa-md">
      <q-table
        title="Users"
        :data="data"
        :columns="columns"
        row-key="username"
        :selected-rows-label="getSelectedRow"
        selection="multiple"
        :selected.sync="selected"
      ></q-table>
      <q-btn
        color="light-green-7"
        size="md"
        class=""
        label="Delete"
        v-on:click="handleDelete"
      />
    </div>
  </div>
</template>

<script>
import { DELETE_USERS, LOAD_USERS } from '../store/user/types';

export default {
  name: 'Users',
  data() {
    return {
      selected: [],
      columns: [
        {
          name: 'username',
          required: true,
          label: 'Username',
          align: 'left',
          sortable: true,
          field: 'username'
        },
        {
          name: 'email',
          align: 'center',
          label: 'Email',
          sortable: true,
          field: 'email'
        },
        {
          name: 'firstname',
          align: 'center',
          label: 'First name',
          sortable: true,
          field: 'firstname'
        },
        {
          name: 'lastname',
          align: 'center',
          label: 'Last name',
          sortable: true,
          field: 'lastname'
        }
      ],
      data: []
    };
  },
  async mounted() {
    this.data = await this.$store.dispatch(LOAD_USERS);
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
      }
      this.data = await this.$store.dispatch(LOAD_USERS);
    }
  }
};
</script>
