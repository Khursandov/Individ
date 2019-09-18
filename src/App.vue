<template>
  <v-app>
    <Header />
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data: () => ({
    //
  }),
  beforeCreate(){
    // console.log('user',this.$store.state.name)
    // console.log('user',this.$store.state.secondName)
    // console.log('user',this.$store.state.password)
    // if(!this.$store.state.name ) {
    //   this.$router.push('/admin')
    // }
  },
  created() {
    this.$store.dispatch('getStudents') 
  }
};
</script>
