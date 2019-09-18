<template>
<v-container grid-list-xs12>
  
  <v-card
    class="mx-auto top"
    max-width="500"
  >
    <v-card-title class="title font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <v-avatar
        color="primary lighten-2"
        class="subheading white--text"
        size="24"
        v-text="step"
      ></v-avatar>
    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="1">
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
            label="secondName"
            v-model="secondName"
          ></v-text-field>
          <span class="caption grey--text text--darken-1">
            Enter your second name
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-card-text>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
          ></v-text-field>
          <v-text-field
            label="Confirm Password"
            type="password"
            v-model="confirmPassword"
          ></v-text-field>
          <span class="caption grey--text text--darken-1">
            Please enter a password for your account
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="3">
        <div class="pa-4 text-center">
          <v-img
            class="mb-4"
            contain
            height="128"
            src="https://cdn.vuetifyjs.com/images/logos/v.svg"
          ></v-img>
          <h3 class="title font-weight-light mb-2">Welcome to Vuetify</h3>
          <span class="caption grey--text">Thanks for signing up!</span>
        </div>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        :disabled="step === 1"
        text
        @click="step--"
      >
        Back
      </v-btn>
      <div class="flex-grow-1"></div>
      <v-btn
        color="primary"
        depressed
        @click="plus"
        :disabled="password !== confirmPassword "
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
      secondName: '',
      password: '',
      confirmPassword: ''
    }),

    computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return 'Sign-up'
          case 2: return 'Create a password'  
        }
      },
    },
    methods: {
      plus() {
        ++this.step
        if(this.step === 4 && this.name !== '' && this.secondName !== '' && this.password !== '') {
          var user = {
            name: this.name,
            secondName: this.secondName,
            password: this.password
          }
          this.$store.dispatch('newUser', user)
        }
      }
    }
  }
</script>

<style scoped>
.top {
  margin-top: 10%;
}
</style>