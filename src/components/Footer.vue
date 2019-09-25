<template>
  <v-bottom-navigation
    :value="activeBtn"
    fixed
    color="teal"
    class="mt-12"
  >
    <v-btn  @click="up" v-scroll-to="scroll">
      <span>Pastga</span>
      <v-icon>mdi-arrow-down</v-icon>
    </v-btn>
    
    <v-btn to="/">
      <span>Asosiy</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn to="/account" v-if="!this.$store.state.admin">
      <span>Profile</span>
      <v-icon>mdi-account</v-icon>
    </v-btn>

    <v-btn to="/admin" v-if="this.$store.state.admin">
      <span>Admin</span>
      <v-icon>mdi-account</v-icon>
    </v-btn>

    <v-btn to="/results">
      <span>Natijalar</span>
      <v-icon>mdi-chart-line</v-icon>
    </v-btn>

    <v-btn  @click="down" v-scroll-to="scroll">
      <span>Yuqoriga</span>
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>

  </v-bottom-navigation>
</template>

<script>
  export default {
    data () {
      return {
        activeBtn: '0',
        scroll: '#test',
        upp: 1
      }
    },
    methods: {
      down(){
        --this.upp
        this.scroll = ''
          this.scroll =  '#test' + this.upp;
          console.log(this.scroll)
      },
      up(){
          ++this.upp
          this.scroll = ''
          this.scroll = '#test' + this.upp;
          console.log(this.scroll)
      }
    }
  }
</script>