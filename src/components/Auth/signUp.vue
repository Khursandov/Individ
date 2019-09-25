<template>
<v-container grid-list-xs12>
  
  <v-card
    class="mx-auto top"
    max-width="500"
  >
    <v-card-title class="title font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
    </v-card-title>

    <v-window >
      <v-window-item>
        <v-card-text>
          <v-text-field
            label="Name"
            v-model="name"
          ></v-text-field>
          <span class="caption grey--text text--darken-1">
            Enter your name
          </span>
        </v-card-text>
        <v-card-text>
          <v-text-field
            label="Password"
            v-model="password"
          ></v-text-field>
          <span class="caption grey--text text--darken-1">
          </span>
        </v-card-text>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <div class="flex-grow-1"></div>
      <v-btn
        color="deep-purple accent-4"
        outlined
        rounded
        depressed
        @click="plus"
        :disabled="name == '' "
      >
        Next
      </v-btn>
    </v-card-actions>
  </v-card>
</v-container>
</template>

<script>
  export default {
    data: () => ({
      step: 1,
      name: '',
      password: '',
    }),

    computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return 'Sign-in'
        }
      },
    },
    methods: {
      plus() {
          var user = {
            name: this.name,
            password: this.password
          }
          this.$store.dispatch('signIn', user)
          this.name = '',
          this.password = ''
      }
    }
  }
</script>

<style scoped>
.top {
  margin-top: 10%;
}
</style>