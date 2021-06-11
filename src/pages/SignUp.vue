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
              v-model="username"
              type="text"
              label="Username"
            />
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
              label="Password"
            />
          </q-form>
        </q-card-section>
        <q-card-actions class="q-px-md">
          <q-btn
            unelevated
            color="light-green-7"
            size="lg"
            class="full-width"
            label="Sign Up"
            v-on:click="handleSignUp"
          />
        </q-card-actions>
      </q-card>
    </div>
    <q-item-label />
  </q-page>
</template>

<script>
import { SIGNUP } from '../store/user/types';
import './Pages.scss';

export default {
  name: 'SignUp',
  data: () => {
    return {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    };
  },
  methods: {
    handleSignUp() {
      const payload = {
        username: this.username,
        password: this.password,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email
      };
      this.$store.dispatch(SIGNUP, payload);
      this.$router.push('/') 
    }
  }
};
</script>
