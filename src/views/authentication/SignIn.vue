<template>
  <v-container
    class="fill-height"
    app
  >
    <v-row justify="center">
      <v-col cols="auto">
        <v-card width="460">
          <v-card-text class="text-center px-12 py-16">
            <div class="text-h4 font-weight-black mb-13">
              로그인
            </div>
            <v-text-field
              label="Email"
              clearable
              prepend-icon="mdi-email"
            />
            <v-text-field
              label="Password"
              clearable
              prepend-icon="mdi-lock-outline"
            />
            <v-btn
              block
              x-large
              color="primary mt-6"
              rounded
            >
              로그인
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>
