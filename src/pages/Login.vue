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
            v-on:click="handleLogin"
          />
        </q-card-actions>
        <q-card-section class="text-center">
          Not registered?
          <router-link to="/SignUp" class="text-bold link"
            >Create an Account</router-link
          >
        </q-card-section>
      </q-card>
    </div>
    <q-item-label />
  </q-page>
</template>

<script>
import { LOGIN } from '../store/user/types';
import './Pages.scss';

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
    handleLogin() {
      this.$store.dispatch(LOGIN, {
        username: this.username,
        password: this.password
      });
      this.$router.push('/') 
    }
  }
};
</script>
