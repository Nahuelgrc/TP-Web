<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-light-green">
      <q-toolbar>
        <q-btn
          v-if="$store.state.user.isAdmin && $store.state.user.isLoggedIn"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <router-link
          to="/"
          class="text-white text-bold"
          style="text-decoration: none; font-size: 2.8em;"
          >BananaShop</router-link
        >
        <q-space></q-space>
        <q-btn flat round dense icon="shopping_cart">
          <q-badge floating color="red">{{
            $store.state.user.cart.length
          }}</q-badge>
        </q-btn>

        <div v-if="$store.state.user.isLoggedIn" style="padd">
          <q-fab v-model="fab" icon="account_circle" direction="down">
            <q-fab-action
              color="orange"
              @click="handleProfile"
              icon="account_circle"
              label="Edit Profile"
            ></q-fab-action>
            <q-fab-action
              color="brown"
              @click="handleLogout"
              icon="logout"
              label="Logout"
            ></q-fab-action>
          </q-fab>
        </div>
        <div v-if="!$store.state.user.isLoggedIn">
          <q-btn flat rounded to="login" float-right>
            Login
          </q-btn>
          <q-btn rounded color="orange" to="signup">
            Sign Up
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-if="leftDrawerOpen && $store.state.user.isAdmin"
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          Control Panel
        </q-item-label>
        <AdminPanel v-for="link in links" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>
    <q-page-container class="bg-white">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import AdminPanel from 'src/components/AdminPanel.vue';

const linksData = [
  {
    title: 'Users',
    icon: 'account_circle',
    link: 'users'
  },
  {
    title: 'Products',
    icon: 'inventory_2',
    link: 'products'
  }
];

export default {
  name: 'MainLayout',
  components: { AdminPanel },
  data() {
    return {
      leftDrawerOpen: false,
      links: linksData,
      fab: false
    };
  },
  methods: {
    handleProfile() {
    },
    handleLogout(test) {
    }
  }
};
</script>
