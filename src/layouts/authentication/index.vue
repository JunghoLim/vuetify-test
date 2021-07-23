<template>
  <v-app>
    <authentication-view />
  </v-app>
</template>

<script>
import AuthenticationView from "./View.vue";
export default {
  name: "AuthenticationLayout",
  components: { AuthenticationView },
};
</script>

<style>
</style>
