<template>
  <v-navigation-drawer
    v-bind="$attrs"
    dark
    app
    :src="require('@/assets/sidebar.png')"
  >
    <template #img="props">
      <v-img
        :gradient="gradient"
        v-bind="props"
      />
    </template>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          Application
        </v-list-item-title>
        <v-list-item-subtitle> subtext </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider />

    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        :to="item.to"
        active-class="primary"
        class="py-1"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "DefaultDrawer",
  data: () => ({
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
      { title: "GridSystem", icon: "mdi-image", to: "/grid-system" },
      { title: "GridListPage", icon: "mdi-image", to: "/grid-list-page" },
      { title: "Breakpoints", icon: "mdi-image", to: "/break-points" },
      { title: "Tables", icon: "mdi-table-settings", to: "/tables" },
      { title: "Forms", icon: "mdi-form-select", to: "/forms" },
      { title: "Buttons", icon: "mdi-gesture-tap-button", to: "/buttons" },
      { title: "Icons", icon: "mdi-emoticon-excited-outline", to: "/icons" },
      {
        title: "SignIn",
        icon: "mdi-login",
        to: "/authentication/sign-in",
      },
      {
        title: "SignUp",
        icon: "mdi-logout",
        to: "/authentication/sign-up",
      },
      {
        title: "ProductList",
        icon: "mdi-reproduction",
        to: "/page/product-list",
      },
    ],
    right: null,
    gradient: "rgba(0,0,0,.7), rgba(0,0,0,.7)",
  }),
};
</script>

<style>
</style>
