<template>
  <v-bottom-navigation
    :value="activeBtn"
    fixed
    color="teal"
  >
    <v-btn to="/">
      <span>Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn to="/account" v-if="!this.$store.state.admin">
      <span>Account</span>
      <v-icon>mdi-account</v-icon>
    </v-btn>

    <v-btn to="/admin" v-if="this.$store.state.admin">
      <span>Admin</span>
      <v-icon>mdi-account</v-icon>
    </v-btn>

    <v-btn to="/results">
      <span>Results</span>
      <v-icon>mdi-chart-line</v-icon>
    </v-btn>

  </v-bottom-navigation>
</template>

<script>
  export default {
    data () {
      return {
        activeBtn: '0',
      }
    },
  }
</script>