<template>
  <v-container>
    <v-card>
      <v-card-title>
        $vuetify.breakpoints.name: {{ $vuetify.breakpoint.name }}
      </v-card-title>
      <v-container>
        <v-card
          class="pa-3"
          outlined
          :height="height"
        >
          content
        </v-card>
      </v-container>
    </v-card>
    <v-card class="mt-5">
      <v-card-title>
        $vuetify.breakpoints.name: {{ $vuetify.breakpoint.name }}
      </v-card-title>
      <v-container>
        <v-card
          class="pa-3"
          outlined
          :height="height"
        >
          content
        </v-card>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 100;
        case "sm":
          return 200;
        case "ms":
          return 300;
        case "lg":
          return 400;
        default:
          return 500;
      }
    },
  },
};
</script>

<style>
</style>
