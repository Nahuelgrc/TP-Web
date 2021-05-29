<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-light-green">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title href="/">
          Shop
        </q-toolbar-title>

        <q-icon size="xl" name="account_circle" />
        <q-btn flat rounded to="login">
          Login
        </q-btn>
        <q-btn rounded color="orange" to="signup">
          Sign Up
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
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
      links: linksData
    };
  }
};
</script>
