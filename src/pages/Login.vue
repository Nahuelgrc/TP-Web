<template>
  <q-page class="row justify-center items-center">
    <div class="column">
      <div class="row">
        <h5 class="text-h5 text-white q-my-md">Login</h5>
      </div>
      <div class="row">
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
              label="Login"
              v-on:click="login"
            />
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <p class="text-grey-6">Not registered? Create an Account</p>
          </q-card-section>
        </q-card>
      </div>
      <q-item-label />
    </div>
  </q-page>
</template>

<script>
import { LOGIN } from '../store/user/types';

export default {
  name: 'Login',
  data: () => {
    return {
      username: '',
      password: '',
      showLoginError: false
    };
  },
  methods: {
    login() {
      this.$store.dispatch(LOGIN, {
        username: this.username,
        password: this.password
      });
    }
  }
};
</script>
