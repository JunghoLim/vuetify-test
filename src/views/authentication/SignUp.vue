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
              회원가입
            </div>
            <v-text-field
              label="Email"
              clearable
              prepend-icon="mdi-email"
            />
            <v-text-field
              label="Name"
              clearable
              prepend-icon="mdi-face"
            />
            <v-text-field
              label="Password"
              clearable
              prepend-icon="mdi-lock-outline"
            />
            <v-text-field
              label="Password-Check"
              clearable
              prepend-icon="mdi-lock-outline"
            />
            <v-btn
              block
              x-large
              color="deep-purple lighten-3 mt-6"
              rounded
            >
              회원가입
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
