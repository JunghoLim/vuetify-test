<template>
  <v-container
    fluid
    app
  >
    <v-row>
      <v-col
        v-for="item in 20"
        :key="item"
        cols="12"
        sm="5"
        md="4"
        lg="3"
      >
        <product-item />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductItem from "../../components/product/ProductItem";
export default {
  name: "ProductList",
  components: { ProductItem },
};
</script>

<style>
</style>
