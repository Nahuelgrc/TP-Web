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
              v-model="firstname"
              type="text"
              label="First name"
            />
            <q-input
              square
              filled
              clearable
              v-model="lastname"
              type="text"
              label="Last name"
            />
            <q-input
              square
              filled
              clearable
              v-model="email"
              type="email"
              label="Email"
            />
            <q-input
              square
              filled
              clearable
              v-model="password"
              type="password"
              label="New password"
            />
          </q-form>
        </q-card-section>
        <q-card-actions class="q-px-md">
          <q-btn
            unelevated
            color="light-green-7"
            size="lg"
            class="full-width"
            label="Save"
            v-on:click="handleSave()"
          />
        </q-card-actions>
      </q-card>
    </div>
    <q-item-label />
  </q-page>
</template>

<script>
import { UPDATE_USER_INFO } from '../store/user/types';
import './Pages.scss';

export default {
  name: 'Profile',
  data: () => {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    };
  },
  mounted() {
    this.firstname = this.$store.state.user.firstname;
    this.lastname = this.$store.state.user.lastname;
    this.email = this.$store.state.user.email;
  },
  methods: {
    handleSave() {
      const payload = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password
      };
      this.$store.dispatch(UPDATE_USER_INFO, payload);
      this.$router.push('/');
    }
  }
};
</script>
