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

    <default-drawer-header />

    <v-divider />

    <default-drawer-list :items="items" />
  </v-navigation-drawer>
</template>

<script>
import DefaultDrawerHeader from './DrawerHeader'
import DefaultDrawerList from './DrawerList'
export default {
  name: "DefaultDrawer",
  components:{DefaultDrawerHeader, DefaultDrawerList},
  data: () => ({
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
      { title: "Pages", icon: "mdi-view-dashboard", items: [
        {
          title: "Athentication",
          icon: "mdi-login",
          items:[
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
                ]
        },
          {
            title: "ProductList",
            icon: "mdi-reproduction",
            to: "/page/product-list",
          },
        ]},
      { title: "GridSystem", icon: "mdi-image", to: "/grid-system" },
      { title: "GridListPage", icon: "mdi-image", to: "/grid-list-page" },
      { title: "Breakpoints", icon: "mdi-image", to: "/break-points" },
      { title: "Tables", icon: "mdi-table-settings", to: "/tables" },
      { title: "Forms", icon: "mdi-form-select", to: "/forms" },
      { title: "Buttons", icon: "mdi-gesture-tap-button", to: "/buttons" },
      { title: "Icons", icon: "mdi-emoticon-excited-outline", to: "/icons" },

    ],
    right: null,
    gradient: "rgba(0,0,0,.7), rgba(0,0,0,.7)",
  }),
};
</script>

<style>
</style>
